import React, { useState } from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Tab, Tabs } from '@material-ui/core';
import CreateRoom from '../components/EnterRoom/CreateRoom';
import JoinRoom from '../components/EnterRoom/JoinRoom';
import { createRoomErrors } from '../types/EnterRoom';

const EnterRoom = () => {
  const [activeTab, setActiveTab] = useState<string>('create');
  const [username, setUsername] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [createRoomErrors, setCreateRoomErrors] = useState<createRoomErrors>({
    usernameError: false,
    roomNameError: false,
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleUsernameChange = (username: string) => {
    setUsername(username);
    setCreateRoomErrors({ ...createRoomErrors, usernameError: !username });
  };

  const handleRoomNameChange = (roomName: string) => {
    setRoomName(roomName);
    setCreateRoomErrors({ ...createRoomErrors, roomNameError: !roomName });
  };

  const handleCreateRoom = () => {
    setCreateRoomErrors({ usernameError: !username, roomNameError: !roomName });

    if (username && roomName) {
      console.log('Creating room: ', roomName, ', for: ', username);
    }
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
            username={username}
            handleUsernameChange={handleUsernameChange}
            roomName={roomName}
            handleRoomNameChange={handleRoomNameChange}
            handleCreateRoom={handleCreateRoom}
            createRoomErrors={createRoomErrors}
          />
        ) : (
          <JoinRoom username={username} handleUsernameChange={handleUsernameChange} />
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
  border-radius: 22px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

export default EnterRoom;
