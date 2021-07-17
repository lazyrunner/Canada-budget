import './table.scss';
import { ProgressBar, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index"
// import decoratedData from '../charts/BarGraph/data';

export default function Table() {
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
                                                <th scope="col">Budget</th>
                                                <th scope="col">Percent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.children.map(parent => {
                                                if(data.clicked && data.parent && data.parent !== parent.name)
                                                    return null;
                                                return parent.children.map(child => {
                                                    if(data.clicked && data.parent && data.parent === parent.name && data.child && data.child !== child.name)
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
                                                            <Form.Control size="sm" type="number" placeholder="Amount" value={child.value} onChange={(e) => { updateChild({ parent: parent.name, child: child.name, value: e.target.value }) }} />
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <span className="mr-2">{(child.value / monthlyExpense.total * 100).toFixed(2)}%</span>
                                                                <div>
                                                                    <ProgressBar className="mt-3">
                                                                        <ProgressBar variant="success" now={(child.value / monthlyExpense.total * 100).toFixed(2)} key={1} />
                                                                    </ProgressBar>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                })
                                            })}
                                            <tr className="table-dark">
                                                <td>
                                                </td>
                                                <th scope="row">
                                                    Total
                                                </th>
                                                <td>
                                                    {monthlyExpense.total}
                                                </td>
                                                <td>
                                                </td>
                                            </tr>
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
                                                    {(salary.afterTax / 12 - monthlyExpense.total).toFixed(2)}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">{(((salary.afterTax/12-monthlyExpense.total)/(salary.afterTax/12))*100).toFixed(2)}%</span>
                                                        <div>
                                                            <ProgressBar className="mt-3">
                                                                <ProgressBar variant="success" now={((salary.afterTax/12-monthlyExpense.total)/(salary.afterTax/12))*100} key={1} />
                                                            </ProgressBar>
                                                        </div>
                                                    </div>
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
