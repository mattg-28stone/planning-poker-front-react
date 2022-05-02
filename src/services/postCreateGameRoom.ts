import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { GameRoom } from '../types/Types';

export const postCreateGameRoom = async (roomName: string): Promise<AxiosResponse<GameRoom>> => {
  return axios.post(`${config.API_ADDRESS}GameRoom/Create?roomName=${roomName}`);
};
