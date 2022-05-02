import React from 'react';
import styled from '@emotion/styled';
import { lightTheme as theme } from '@28stoneconsulting/design-system';
import { Button, Tooltip } from '@material-ui/core';
import { ContentCopyRounded, PersonRounded } from '@mui/icons-material';
import { Player } from '../../types/Types';

interface Props {
  roomId: string;
  roomName: string;
  players: Array<Player>;
  getURL: () => void;
}

const VirtualRoom: React.FC<Props> = ({ roomName, players, getURL }) => {
  return (
    <RoomContainer>
      <div>
        <ControlPanel>
          <Tooltip title="Copy room URL">
            <CopyURLButtonStyled>
              <ContentCopyRounded onClick={() => getURL()} />
            </CopyURLButtonStyled>
          </Tooltip>
        </ControlPanel>
        <PlayersPanel>
          {players.map((player, index) => (
            <PlayerContainer key={index}>
              <PersonRoundedStyled />
              {player.name}
            </PlayerContainer>
          ))}
        </PlayersPanel>
      </div>
      <div>
        <RoomNameText>{roomName}</RoomNameText>
        <PlayersCardsPanel></PlayersCardsPanel>
        <CardSelectPanel></CardSelectPanel>
      </div>
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  top: 5vh;
`;

const ControlPanel = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  margin-bottom: 20px;
`;

const CopyURLButtonStyled = styled(Button)`
  height: 100%;
`;

const PlayersPanel = styled.div`
  width: 300px;
  min-height: 570px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
`;

const PlayerContainer = styled.div`
  padding: 25px;
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto, serif;
  color: #333333;
  cursor: pointer;
`;

const PersonRoundedStyled = styled(PersonRounded)`
  color: ${theme.palette.brand.darkGrey};
  position: relative;
  top: 4px;
  padding: 0 10px 0 0;
`;

const RoomNameText = styled.div`
  font-family: Roboto, serif;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: rgb(51, 51, 51);
  margin: 20px 0;
  height: 30px;
`;

const PlayersCardsPanel = styled.div`
  width: 1000px;
  min-height: 350px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  margin-bottom: 20px;
`;

const CardSelectPanel = styled.div`
  width: 1000px;
  min-height: 200px;
  border-radius: 7px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
`;

export default VirtualRoom;
