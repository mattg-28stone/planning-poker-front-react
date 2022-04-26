import React from 'react';
import { User } from '../../types/Room';

interface Props {
  roomId: string;
  roomName: string;
  users: Array<User>;
}

const VirtualRoom: React.FC<Props> = ({ roomId, roomName, users }) => {
  return (
    <div>
      VirtualRoom - roomId: {roomId}, users: {users[0]?.username}, room name: {roomName}
    </div>
  );
};

export default VirtualRoom;
