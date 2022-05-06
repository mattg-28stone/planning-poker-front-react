import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { MeetingRoomRounded, PersonRounded } from '@mui/icons-material';
import { createRoomErrors } from '../../types/Types';

interface Props {
  playerName: string;
  handlePlayerNameChange: (playerName: string) => void;
  roomName: string;
  handleRoomNameChange: (roomName: string) => void;
  handleCreateRoom: () => void;
  createRoomErrors: createRoomErrors;
}

const CreateRoom: React.FC<Props> = ({
  playerName,
  handlePlayerNameChange,
  roomName,
  handleRoomNameChange,
  handleCreateRoom,
  createRoomErrors,
}) => {
  const { noPlayerName, noRoomName, apiErrors } = createRoomErrors;

  return (
    <RoomDetailsContainer>
      <TextFieldStyled
        label="Your name"
        value={playerName}
        onChange={event => handlePlayerNameChange(event.target.value)}
        error={noPlayerName}
        helperText={noPlayerName && 'Please enter your name'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonRoundedStyled />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        required
      />
      <TextFieldStyled
        label="Room name"
        value={roomName}
        onChange={event => handleRoomNameChange(event.target.value)}
        error={noRoomName || apiErrors ? true : false}
        helperText={noRoomName ? 'Please enter a room name' : apiErrors ? apiErrors[0] : null}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MeetingRoomRoundedStyled />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        required
      />
      <ButtonStyled onClick={handleCreateRoom} variant="contained">
        Create Room
      </ButtonStyled>
    </RoomDetailsContainer>
  );
};

const RoomDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ error }) => ({
  margin: '12px 0',
  '& label.Mui-focused': {
    color: error ? theme.palette.brand.orange : theme.palette.brand.darkGrey,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: error ? theme.palette.brand.orange : theme.palette.brand.darkGrey,
    },
    '&.Mui-focused fieldset': {
      borderColor: error ? theme.palette.brand.orange : theme.palette.brand.darkGrey,
    },
  },
}));

const PersonRoundedStyled = styled(PersonRounded)`
  color: ${theme.palette.brand.darkGrey};
`;

const MeetingRoomRoundedStyled = styled(MeetingRoomRounded)`
  color: ${theme.palette.brand.darkGrey};
`;

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  background: ${theme.palette.brand.orange};
  color: #ffffff;
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default CreateRoom;
