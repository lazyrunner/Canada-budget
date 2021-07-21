import './table.scss';
import { ProgressBar, Form,InputGroup, FormControl, } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index"
// import decoratedData from '../charts/BarGraph/data';

export default function MonthlyPercentTable() {
    const { monthlyExpense, salary } = useSelector((state) => state);
    const dispatch = useDispatch();
    const { updateChild } = bindActionCreators(actionCreators, dispatch);
    var data = { ...monthlyExpense };
    return (
        <div className="TableComp">
            <div className="main-content">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-header border-0">
                                    <h3 className="mb-0">Monthly Budget</h3>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Group</th>
                                                <th scope="col">Item</th>
                                                <th scope="col">Percent</th>
                                                <th scope="col">Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.children.map(parent => {
                                                if (data.clicked && data.parent && data.parent !== parent.name)
                                                    return null;
                                                return parent.children.map(child => {
                                                    if (data.clicked && data.parent && data.parent === parent.name && data.child && data.child !== child.name)
                                                        return null;
                                                    return (<tr>
                                                        <td>
                                                            <span className="badge badge-dot">
                                                                <i style={{ backgroundColor: parent.hex }}></i>
                                                            </span>
                                                            {parent.name}
                                                        </td>
                                                        <th scope="row">
                                                            <div className="media align-items-center">
                                                                <div className="media-body">
                                                                    <span className="mb-0 text-sm">{child.name}</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <InputGroup size="sm">
                                                                        <InputGroup.Text id="inputGroup-sizing-sm">%</InputGroup.Text>
                                                                        <FormControl type="number" aria-label="small" placeholder="Percent" value={child.percent} onChange={(e) => { updateChild({ parent: parent.name, child: child.name, percent: e.target.value }) }} />
                                                                    </InputGroup>
                                                        
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            $ {(child.percent/100 * (salary.afterTax/12)).toFixed(2)}
                                                        </td>
                                                    </tr>)
                                                })
                                            })}
                                            <tr className="table-success">
                                                <td>
                                                </td>
                                                <th scope="row">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">Saving</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">{(monthlyExpense.savedPercent).toFixed(2)}%</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    $ {(monthlyExpense.savedPercent/100 * salary.afterTax / 12).toFixed(2)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
