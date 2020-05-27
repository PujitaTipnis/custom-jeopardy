const sortedLeaders = [];

const players = (state = {}, action) => {
    switch(action.type){
        case "SET_PLAYERS":
            return {
                ...state,
                players: action.payload
            };
        case "SET_LEADER": {
            return {
                ...state,
                leader: {
                    ...action.payload
                }
            };
        }
        case "INCREMENT": {
            const leadingScore = state.leader.score;
            const leaderName = state.leader.player;

            if (leadingScore <= action.payload.score) {
                sortedLeaders.push(action.payload);
                console.log('sorted leaders', sortedLeaders);
            }

            return {
                ...state,
                players: {
                    ...state.players,
                    [action.payload.name]: {
                        ...action.payload,
                        score: action.payload.score + 50
                    }
                },
                leader: {
                    name: 'Leading',
                    player: leadingScore <= action.payload.score ? action.payload.name : leaderName,
                    score: leadingScore <= action.payload.score ? action.payload.score + 50 : leadingScore
                }
            };
        }
        case "DECREMENT": {
            const leadingScore = state.leader.score;
            const leaderName = state.leader.player;

            console.log('state', state);
            if (leadingScore >= action.payload.score && leaderName === action.payload.name) {
                console.log('leading score', leadingScore);
                sortedLeaders.pop();
                console.log('sorted leaders', sortedLeaders);
            }

            return {
                ...state,
                players: {
                    ...state.players,
                    [action.payload.name]: {
                        ...action.payload,
                        score: action.payload.score - 5
                    }
                },
                leader: {
                    name: 'Leading',
                    player: leadingScore > action.payload.score ? action.payload.name : leaderName,
                    score: leadingScore > action.payload.score ? action.payload.score - 5 : leadingScore,
                }
            };
        }
        default: 
            return state;
    }
};

export default players;