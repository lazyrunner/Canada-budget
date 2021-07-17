export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"deposit",
            payload: amount
        })
    }    
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type:"withdraw",
            payload: amount
        })
    }    
}

export const updateChild = (data) => {
    return (dispatch) => {
        dispatch({
            type:"updateChild",
            payload: data
        })
    }    
}

export const updateHighlight = (data) => {
    return (dispatch) => {
        dispatch({
            type:"updateHighlight",
            payload: data
        })
    }    
}

export const updateClicked = (data) => {
    return (dispatch) => {
        dispatch({
            type:"clicked",
            payload: data
        })
    }    
}

export const updateHourly = (data) => {
    return (dispatch) => {
        dispatch({
            type:"hourlyUpdate",
            payload: data
        })
    }    
}

export const updateYearly = (data) => {
    return (dispatch) => {
        dispatch({
            type:"yearlyUpdate",
            payload: data
        })
    }    
}

export const updateWorkDays = (data) => {
    return (dispatch) => {
        dispatch({
            type:"workDaysUpdate",
            payload: data
        })
    }    
}

export const updateTax = (data) => {
    return (dispatch) => {
        dispatch({
            type:"taxUpdate",
            payload: data
        })
    }    
}
