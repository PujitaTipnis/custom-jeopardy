import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions';
import Button from 'react-bootstrap/Button';
import EmojiEventsIcon from '@material-ui/icons/EmojiEventsOutlined';
import './Player.css';

const Player = ({ name }) => {
    const dispatch = useDispatch();
    const allPlayers = useSelector(state => state.players.players);
    const leader = useSelector(state => state.players.leader);

    useEffect(() => {

    }, [leader]);

    const incrementScore = () => {
        dispatch(allActions.playerActions.increment(allPlayers[name]));
    };

    if (allPlayers) {
        return (
        <div className="playerContainer">
            <h4 className={name === 'Leading' && 'leader'}>
                {name === 'Leading' ?
                    <>
                        <EmojiEventsIcon />
                        <span className="leaderDetail">{name}</span>
                    </> :
                    <>{name}</>
                }
            </h4>
            <h3>{name === 'Leading' && leader.score > 0 ?
                leader.score :
                allPlayers[name].score}</h3>
            <div className="buttonWrapper">
                {name === 'Leading' ? (
                    <h3>{leader.player}</h3>
                ) : (
                    <Button
                        variant="info"
                        className="add"
                        onClick={incrementScore}>
                            +
                    </Button>
                )}
                {/* {' '}<Button
                    variant="danger"
                    className="subtract"
                    onClick={() => dispatch(allActions.playerActions.decrement(allPlayers[name]))}>
                        - 5
                </Button> */}
            </div>
        </div> 
        );
    }
    return null;
};

export default Player;