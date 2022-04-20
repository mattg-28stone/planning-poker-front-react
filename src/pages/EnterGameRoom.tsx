import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, InputAdornment, Tab, Tabs, TextField } from '@material-ui/core';
import { MeetingRoomRounded, PersonRounded } from '@mui/icons-material';
import { lightTheme as theme } from '@28stoneconsulting/design-system';

const EnterGameRoom = () => {
  const [activeTab, setActiveTab] = useState<string>('create');

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <EnterGameRoomContainer>
      <RoomSelectPanel>
        <Tabs
          value={activeTab}
          onChange={(event, newValue) => handleTabChange(newValue)}
          TabIndicatorProps={{ style: { background: theme.palette.brand.orange } }}
        >
          <Tab label="Create Room" value="create" />
          <Tab label="Join Room" value="join" />
        </Tabs>
        {activeTab === 'create' ? (
          <RoomDetailsContainer>
            <TextInput
              label="Your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRounded style={{ color: theme.palette.brand.darkGrey }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
            <TextInput
              label="Room name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MeetingRoomRounded style={{ color: theme.palette.brand.darkGrey }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
            <CreateButton variant="contained">Create Room</CreateButton>
          </RoomDetailsContainer>
        ) : (
          <RoomDetailsContainer>
            <TextInput
              label="Your name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonRounded style={{ color: theme.palette.brand.darkGrey }} />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
          </RoomDetailsContainer>
        )}
      </RoomSelectPanel>
    </EnterGameRoomContainer>
  );
};

const EnterGameRoomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RoomSelectPanel = styled.div`
  height: 320px;
  width: 600px;
  border-radius: 22px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;

const RoomDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const TextInput = styled(TextField)({
  margin: '12px 0',
  '& label.Mui-focused': {
    color: theme.palette.brand.darkGrey,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.brand.darkGrey,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.brand.darkGrey,
    },
  },
});

const CreateButton = styled(Button)`
  margin: 12px 0;
  color: #ffffff;
  background: ${theme.palette.brand.orange};
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default EnterGameRoom;
