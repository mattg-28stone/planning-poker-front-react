import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Tab, Tabs } from '@material-ui/core';
import CreateRoom from '../components/EnterRoom/CreateRoom';
import JoinRoom from '../components/EnterRoom/JoinRoom';
import { createRoomErrors, GameRoom } from '../types/EnterRoom';
import { postCreateGameRoom } from '../services/postCreateGameRoom';
import { postJoinRoom } from '../services/postJoinRoom';
import { getGameRoomList } from '../services/getGameRoomList';

const EnterRoom = () => {
  const history = useHistory();

  const [activeTab, setActiveTab] = useState<string>('create');
  const [playerName, setPlayerName] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [createRoomErrors, setCreateRoomErrors] = useState<createRoomErrors>({
    noPlayerName: false,
    noRoomName: false,
    roomNameAlreadyExists: false,
  });
  const [gameRooms, setGameRooms] = useState<Array<GameRoom>>([]);

  useEffect(() => {
    getGameRoomList().then(res => {
      setGameRooms(res.data);
    });
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePlayerNameChange = (playerName: string) => {
    setPlayerName(playerName);
    setCreateRoomErrors({
      ...createRoomErrors,
      noPlayerName: !playerName,
    });
  };

  const handleRoomNameChange = (roomName: string) => {
    setRoomName(roomName);
    setCreateRoomErrors({
      ...createRoomErrors,
      noRoomName: !roomName,
    });
  };

  const handleCreateRoom = () => {
    setCreateRoomErrors({
      noPlayerName: !playerName,
      noRoomName: !roomName,
    });

    if (playerName && roomName) {
      postCreateGameRoom(roomName)
        .then(res => {
          const { id } = res.data;
          postJoinRoom(id, playerName).then(() => {
            history.push(`/room/${id}`, { playerName, roomName });
          });
        })
        .catch(error => {
          console.log('Failed to create new room - ', error);
          setCreateRoomErrors({
            ...createRoomErrors,
            roomNameAlreadyExists: true,
          });
        });
    }
  };

  const handleJoinRoom = () => {
    history.push('/room/1', { roomCreator: playerName, roomName });
  };

  return (
    <EnterRoomContainer>
      <EnterRoomPanel>
        <Tabs
          value={activeTab}
          onChange={(event, tab) => handleTabChange(tab)}
          TabIndicatorProps={{ style: { background: theme.palette.brand.orange } }}
        >
          <Tab label="Create Room" value="create" />
          <Tab label="Join Room" value="join" />
        </Tabs>
        {activeTab === 'create' ? (
          <CreateRoom
            playerName={playerName}
            handlePlayerNameChange={handlePlayerNameChange}
            roomName={roomName}
            handleRoomNameChange={handleRoomNameChange}
            handleCreateRoom={handleCreateRoom}
            createRoomErrors={createRoomErrors}
          />
        ) : (
          <JoinRoom
            playerName={playerName}
            handlePlayerNameChange={handlePlayerNameChange}
            handleJoinRoom={handleJoinRoom}
            gameRooms={gameRooms}
          />
        )}
      </EnterRoomPanel>
    </EnterRoomContainer>
  );
};

const EnterRoomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EnterRoomPanel = styled.div`
  position: relative;
  top: 22vh;
  width: 600px;
  border-radius: 7px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

export default EnterRoom;
