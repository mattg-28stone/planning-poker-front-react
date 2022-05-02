import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import { PersonRounded } from '@mui/icons-material';
import { ListItemButton } from '@mui/material';
import { GameRoom } from '../../types/EnterRoom';

interface Props {
  playerName: string;
  handlePlayerNameChange: (playerName: string) => void;
  handleJoinRoom: () => void;
  gameRooms: Array<GameRoom>;
}

const JoinRoom: React.FC<Props> = ({ playerName, handlePlayerNameChange, handleJoinRoom, gameRooms }) => {
  return (
    <RoomDetailsContainer>
      {gameRooms.length > 0 ? (
        <>
          <TextFieldStyled
            label="Your name"
            value={playerName}
            onChange={event => handlePlayerNameChange(event.target.value)}
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
          <RoomListTitleStyled>Available Rooms</RoomListTitleStyled>
          <ListStyled dense>
            {gameRooms.map((room, index) => (
              <ListItem key={index}>
                <ListItemButton>
                  <ListItemText primary={room.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </ListStyled>
          <ButtonStyled onClick={handleJoinRoom} variant="contained">
            Join Room
          </ButtonStyled>
        </>
      ) : (
        <NoRoomsTitleStyled>No available rooms.</NoRoomsTitleStyled>
      )}
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

const RoomListTitleStyled = styled.span`
  font-size: 12px;
  font-family: 'Roboto', 'Serif';
  margin-top: 6px;
  color: #929397;
`;

const ListStyled = styled(List)`
  overflow-y: scroll;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  height: 140px;
  margin: 6px 0 12px 0;
`;

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  background: ${theme.palette.brand.orange};
  color: #ffffff;
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

const NoRoomsTitleStyled = styled.span`
  margin: 12px 0;
  font-size: 16px;
  font-family: 'Roboto', 'Serif';
  color: #818181;
  text-align: center;
`;

export default JoinRoom;
