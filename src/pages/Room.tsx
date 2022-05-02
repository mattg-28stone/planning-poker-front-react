import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VirtualRoom from '../components/Room/VirtualRoom';
import { getGameRoomById } from '../services/getGameRoomById';
import { Player } from '../types/Types';

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const [roomName, setRoomName] = useState<string>('');
  const [players, setPlayers] = useState<Array<Player>>([]);

  useEffect(() => {
    getGameRoomById(roomId).then(res => {
      const { players, name } = res.data;
      setPlayers(players);
      setRoomName(name);
    });
  }, [roomId]);

  const getURL = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return <VirtualRoom roomId={roomId} roomName={roomName} players={players} getURL={getURL} />;
};

export default Room;
