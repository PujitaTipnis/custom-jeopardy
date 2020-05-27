const setPlayer = (players) => {
    return {
        type: "SET_PLAYERS",
        payload: players
    }
};

const setLeader = (player) => {
    return {
        type: "SET_LEADER",
        payload: player
    }
};

const increment = (player) => {
    return {
        type: "INCREMENT",
        payload: player
    }
};

const decrement = (player) => {
    return {
        type: "DECREMENT",
        payload: player
    }
};

export default {
    setPlayer,
    setLeader,
    increment,
    decrement
};