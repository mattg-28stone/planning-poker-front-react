import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { MeetingRoomRounded, PersonRounded } from '@mui/icons-material';

const CreateRoom = () => {
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
      <TextFieldStyled
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
      <ButtonStyled variant="contained">Create Room</ButtonStyled>
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

const ButtonStyled = styled(Button)`
  margin: 12px 0;
  color: #ffffff;
  background: ${theme.palette.brand.orange};
  &:hover {
    background-color: ${theme.palette.brand.orange};
  }
`;

export default CreateRoom;
