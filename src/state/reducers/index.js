import { combineReducers } from "redux";
import accountReducer from './accountReducer';
import monthlyExpenseReducer from './monthlyExpenseReducer';
import salaryReducer from './salaryReducer';

const reducers = combineReducers({
    account: accountReducer,
    monthlyExpense: monthlyExpenseReducer,
    salary: salaryReducer
})

export default reducers;