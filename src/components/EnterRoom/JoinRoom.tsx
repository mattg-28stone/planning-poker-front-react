import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { PersonRounded } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';

interface Props {
  username: string;
  handleUsernameChange: (username: string) => void;
  handleJoinRoom: () => void;
}

const JoinRoom: React.FC<Props> = ({ username, handleUsernameChange, handleJoinRoom }) => {
  return (
    <RoomDetailsContainer>
      <TextFieldStyled
        label="Your name"
        value={username}
        onChange={event => handleUsernameChange(event.target.value)}
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
      <ButtonStyled onClick={handleJoinRoom} variant="contained">
        Join Room
      </ButtonStyled>
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
  overflow-y: scroll;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  height: 140px;
  margin: 12px 0;
`;

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  background: ${theme.palette.brand.orange};
  color: #ffffff;
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default JoinRoom;
