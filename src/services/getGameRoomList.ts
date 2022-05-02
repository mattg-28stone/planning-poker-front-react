import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { GameRoom } from '../types/EnterRoom';

export const getGameRoomList = async (): Promise<AxiosResponse<Array<GameRoom>>> => {
  return axios.get(`${config.API_ADDRESS}GameRoom/List`);
};
