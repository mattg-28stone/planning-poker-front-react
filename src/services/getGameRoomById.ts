import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { GameRoom } from '../types/Types';

export const getGameRoomById = async (roomId: string): Promise<AxiosResponse<GameRoom>> => {
  return axios.get(`${config.API_ADDRESS}GameRoom/Get/${roomId}`);
};
