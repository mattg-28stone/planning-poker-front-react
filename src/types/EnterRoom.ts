export interface createRoomErrors {
  playerNameError: boolean;
  roomNameError: boolean;
}

export interface GameRoom {
  id: string;
  name: string;
  players: Array<Player>;
}

export interface Player {
  id: string;
  name: string;
}
