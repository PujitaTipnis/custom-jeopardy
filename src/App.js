import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Scoreboard from './components/Scroreboard/Scoreboard';
import RFModal from './components/RapidFire/RFModal';
import data from './jeopardyData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const players = data.players;
  const leader = { name: "", player: "", score: 0 };
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  useEffect(() => {
    dispatch(allActions.playerActions.setPlayer(players));
    dispatch(allActions.playerActions.setLeader(leader));
  }, []);

  const openRFModalTeam = ({ show, setShow, team }) => {
    return <RFModal show={show} setShow={setShow} team={team} />;
  }

  return (
    <Container fluid className="App">
      <Row className="Header">
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Board boardQuestions={data.boardQuestions} />
        </Col>
        <Col xs={6} md={{ span: 3, offset: 1 }}>
          <Scoreboard
            players={data.players} />
          <div className="rapidFireContainer">
            <Button
              className="rapidFireButtons"
              style={{ marginRight: '0.5rem' }}
              onClick={() => setShowModalA(true)}
              variant="info">
              Team A
            </Button>{' '}
            {openRFModalTeam({ show: showModalA, setShow: setShowModalA, team: "Team A" })}
            <Button
              className="rapidFireButtons"
              onClick={() => setShowModalB(true)}
              variant="info">
              Team B
            </Button>
            {openRFModalTeam({ show: showModalB, setShow: setShowModalB, team: "Team B" })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
