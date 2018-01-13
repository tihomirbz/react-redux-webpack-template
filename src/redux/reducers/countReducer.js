let initialState = {
    value: 0
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, value: state.value += 1 }
        case 'DECREASE':
            return { ...state, value: state.value -= 1 }
        default:
            return state;
    }
}

export default countReducer;
