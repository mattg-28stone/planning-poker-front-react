import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VirtualRoom from '../components/Room/VirtualRoom';
import { User } from '../types/Room';

interface LocationProps {
  roomCreator: string;
  roomName: string;
}

const Room = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { state } = useLocation<LocationProps>();

  let roomCreator = '';
  let roomName = '';

  if (state) {
    roomCreator = state.roomCreator;
    roomName = state.roomName;
  } else {
    // Fetch data from api?
  }

  const [users, setUsers] = useState<Array<User>>([{ username: roomCreator, role: 'creator' }]);

  return <VirtualRoom roomId={roomId} roomName={roomName} users={users} />;
};

export default Room;
