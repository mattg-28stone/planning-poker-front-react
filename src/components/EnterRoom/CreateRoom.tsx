import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import { MeetingRoomRounded, PersonRounded } from '@mui/icons-material';
import { createRoomErrors } from '../../types/EnterRoom';

interface Props {
  username: string;
  handleUsernameChange: (username: string) => void;
  roomName: string;
  handleRoomNameChange: (roomName: string) => void;
  handleCreateRoom: () => void;
  createRoomErrors: createRoomErrors;
}

const CreateRoom: React.FC<Props> = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleCreateRoom,
  createRoomErrors,
}) => {
  const { usernameError, roomNameError } = createRoomErrors;

  return (
    <RoomDetailsContainer>
      <TextFieldStyled
        label="Your name"
        value={username}
        onChange={event => handleUsernameChange(event.target.value)}
        error={usernameError}
        helperText={usernameError && 'Please enter your name'}
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
      <TextFieldStyled
        label="Room name"
        value={roomName}
        onChange={event => handleRoomNameChange(event.target.value)}
        error={roomNameError}
        helperText={roomNameError && 'Please enter a room name'}
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

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  background: ${theme.palette.brand.orange};
  color: #ffffff;
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default CreateRoom;
