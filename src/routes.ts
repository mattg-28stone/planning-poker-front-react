import React from 'react';

const EnterRoom = React.lazy(() => import('./pages/EnterRoom'));
const Room = React.lazy(() => import('./pages/Room'));

export enum Routes {
  EnterRoom = '/enter-room',
  Room = '/room/:roomId',
}

type IsAvailableFunction = () => boolean;

type RouteConfig = {
  url: Routes;
  component: React.LazyExoticComponent<() => JSX.Element>;
  isAvailable?: IsAvailableFunction;
};

export const isRouteAvailable: Record<Routes, IsAvailableFunction> = {
  [Routes.EnterRoom]: () => true,
  [Routes.Room]: () => true,
};

export const ROUTE_CONFIG: RouteConfig[] = [
  {
    url: Routes.EnterRoom,
    component: EnterRoom,
    isAvailable: isRouteAvailable[Routes.EnterRoom],
  },
  {
    url: Routes.Room,
    component: Room,
    isAvailable: isRouteAvailable[Routes.Room],
  },
];
