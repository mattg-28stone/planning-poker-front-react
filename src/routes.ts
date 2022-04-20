import React from 'react';

const EnterGameRoom = React.lazy(() => import('./pages/EnterGameRoom'));
const GameRoom = React.lazy(() => import('./pages/GameRoom'));

export enum Routes {
  EnterGameRoom = '/enter-game-room',
  GameRoom = '/game-room/:roomId',
}

type IsAvailableFunction = () => boolean;

type RouteConfig = {
  url: Routes;
  component: React.LazyExoticComponent<() => JSX.Element>;
  isAvailable?: IsAvailableFunction;
};

export const isRouteAvailable: Record<Routes, IsAvailableFunction> = {
  [Routes.EnterGameRoom]: () => true,
  [Routes.GameRoom]: () => true,
};

export const ROUTE_CONFIG: RouteConfig[] = [
  {
    url: Routes.EnterGameRoom,
    component: EnterGameRoom,
    isAvailable: isRouteAvailable[Routes.EnterGameRoom],
  },
  {
    url: Routes.GameRoom,
    component: GameRoom,
    isAvailable: isRouteAvailable[Routes.GameRoom],
  },
];
