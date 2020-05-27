import React, { useState } from 'react';
import data from '../../jeopardyData.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RFModal = ({ show, setShow, team }) => {
  const rapidFireQuestions = data.rapidFireQuestions;
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [quesIdx, setQuesIdx] = useState(0);
  const [questionsA, questionsB] = rapidFireQuestions;
  let questions = [];

  if (team === 'Team A') {
    questions = questionsA[team];
  } else {
    questions = questionsB[team];
  }

  const displayNextQuestion = () => {
    setQuesIdx(quesIdx + 1);
    setRevealAnswer(false);
  }

  return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {team}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {questions[quesIdx].question}
          </p>
          <p>
              <Button
                  variant="link"
                  onClick={() => setRevealAnswer(true)}
              >
                  {!revealAnswer ? 'Answer' : questions[quesIdx].answer}
              </Button>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={displayNextQuestion}
            disabled={quesIdx + 1 === questions.length}>Next</Button>
          <Button
            variant="outline-primary"
            onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default RFModal;