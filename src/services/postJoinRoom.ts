import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { GameRoom } from '../types/EnterRoom';

export const postJoinRoom = async (roomId: string, playerName: string): Promise<AxiosResponse<GameRoom>> => {
  return axios.post(`${config.API_ADDRESS}Player/Join/Room/${roomId}/${playerName}`);
};
