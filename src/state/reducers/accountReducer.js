const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit": 
            console.log(state);
            return state + action.payload;
        case "withdraw":
            console.log(state);
            return state - action.payload
        default:
            return state;
    }
}

export default reducer;