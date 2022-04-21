import React, { useState } from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Tab, Tabs } from '@material-ui/core';
import CreateRoom from '../components/EnterRoom/CreateRoom';
import JoinRoom from '../components/EnterRoom/JoinRoom';

const EnterRoom = () => {
  const [activeTab, setActiveTab] = useState<string>('create');

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <EnterRoomContainer>
      <EnterRoomPanel>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => handleTabChange(newValue)}
          TabIndicatorProps={{ style: { background: theme.palette.brand.orange } }}
        >
          <Tab label="Create Room" value="create" />
          <Tab label="Join Room" value="join" />
        </Tabs>
        {activeTab === 'create' ? <CreateRoom /> : <JoinRoom />}
      </EnterRoomPanel>
    </EnterRoomContainer>
  );
};

const EnterRoomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EnterRoomPanel = styled.div`
  width: 600px;
  border-radius: 22px;
  position: relative;
  top: 22vh;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

export default EnterRoom;
