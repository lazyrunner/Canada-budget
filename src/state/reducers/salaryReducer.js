const intitalState = {
    yearly: 80000,
    hourly: 40.32,
    workDays:248,
    tax: 26,
    afterTax:59200
} 
const reducer = (state = intitalState, action) => {
    let newState = {...state};
    switch (action.type) {
        case "hourlyUpdate":
            newState.hourly = action.payload;
            newState.yearly = newState.workDays * newState.hourly * 8;
            newState.afterTax = newState.yearly - newState.yearly*(newState.tax/100);
            return newState;
        case "yearlyUpdate":
            newState.yearly = action.payload;
            newState.hourly = newState.yearly / newState.workDays / 8;
            newState.afterTax = newState.yearly - newState.yearly*(newState.tax/100);
            return newState;
        case "workDaysUpdate":
            newState.workDays = action.payload;
            newState.yearly = newState.workDays * newState.hourly * 8;
            newState.afterTax = newState.yearly - newState.yearly*(newState.tax/100);
            return newState;
        case "taxUpdate":
            newState.tax = action.payload;
            newState.afterTax = newState.yearly - newState.yearly*(newState.tax/100);
            return newState;
        default:
            return state;
    }
}

export default reducer;