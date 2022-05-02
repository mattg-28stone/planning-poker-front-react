import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VirtualRoom from '../components/Room/VirtualRoom';
import { Player } from '../types/Room';

interface LocationProps {
  playerName: string;
  roomName: string;
}

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { state } = useLocation<LocationProps>();

  let playerName = '';
  let roomName = '';

  if (state) {
    playerName = state.playerName;
    roomName = state.roomName;
  } else {
    // Fetch data from api?
  }

  const [players, setPlayers] = useState<Array<Player>>([{ playerName, role: 'creator' }]);

  const getURL = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return <VirtualRoom roomId={roomId} roomName={roomName} players={players} getURL={getURL} />;
};

export default Room;
