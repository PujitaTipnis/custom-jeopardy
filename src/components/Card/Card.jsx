import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import './Card.css';

const Card = ({ player, question, answer, title }) => {
    const [modalShow, setModalShow] = useState(false);
    const [cardVisited, setCardVisited] = useState(false);
    const [revealAnswer, setRevealAnswer] = useState(false);

    const QuestionModal = ({ answer, onHide, question, ...rest }) => {
        return (
            <Modal
              {...rest}    
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {`Category: ${title}`}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  {question}
                </p>
                <p>
                    <Button
                        variant="link"
                        onClick={() => setRevealAnswer(true)}
                    >
                        {!revealAnswer ? 'Answer' : answer}
                    </Button>
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
    }

    return (
       <div className="cardContainer">
            <Button
                variant={cardVisited ? "info" : "outline-info"}
                onClick={() => {
                    setModalShow(true);
                    setCardVisited(true);
                }}>
                {player}
            </Button>
            <QuestionModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                question={question}
                answer={answer}
            />
       </div> 
    );
};

export default Card;