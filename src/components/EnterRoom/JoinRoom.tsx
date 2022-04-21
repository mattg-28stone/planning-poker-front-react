import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { PersonRounded } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';

const JoinRoom = () => {
  return (
    <RoomDetailsContainer>
      <TextFieldStyled
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
      <ButtonStyled variant="contained">Join Room</ButtonStyled>
    </RoomDetailsContainer>
  );
};

const RoomDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const TextFieldStyled = styled(TextField)({
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

const ListStyled = styled(List)`
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  height: 140px;
  overflow-y: scroll;
  margin: 12px 0;
`;

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  color: #ffffff;
  background: ${theme.palette.brand.orange};
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default JoinRoom;
