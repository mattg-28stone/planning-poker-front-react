export interface createRoomErrors {
  noPlayerName: boolean;
  noRoomName: boolean;
  apiErrors?: Array<string>;
}

export interface GameRoom {
  id: string;
  name: string;
  players: Array<Player>;
}

export interface Player {
  id?: string;
  name: string;
}
