import React from 'react';
import { useParams } from 'react-router-dom';

const Room = () => {
  const params = useParams<{ roomId: string }>();
  console.log('params ', params);

  return <div>ROOM PAGE (ROOM: {params.roomId})</div>;
};

export default Room;
