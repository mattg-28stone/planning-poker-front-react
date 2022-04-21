import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, InputAdornment, List, ListItem, ListItemText, Tab, Tabs, TextField } from '@material-ui/core';
import { MeetingRoomRounded, PersonRounded } from '@mui/icons-material';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { ListItemButton } from '@mui/material';

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
            <ListStyled dense>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Room 1" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Room 2" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Room 3" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemText primary="Room 4" />
                </ListItemButton>
              </ListItem>
            </ListStyled>
            <CreateButton variant="contained">Join Room</CreateButton>
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
  width: 600px;
  border-radius: 22px;
  position: relative;
  top: 22vh;
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

const ListStyled = styled(List)`
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  height: 140px;
  overflow-y: scroll;
  margin: 12px 0;
`;

export default EnterGameRoom;
