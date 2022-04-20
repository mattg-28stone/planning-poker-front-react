import React from 'react';
import { useParams } from 'react-router-dom';

const GameRoom = () => {
  const params = useParams<{ roomId: string }>();
  console.log('params ', params);

  return <div>GAME ROOM PAGE (ROOM: {params.roomId})</div>;
};

export default GameRoom;
