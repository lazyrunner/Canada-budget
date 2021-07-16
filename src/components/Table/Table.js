_rf
import './table.scss';
import { ProgressBar, Form } from 'react-bootstrap';
import decoratedData from '../charts/BarGraph/data';

export default function Table() {
    var data = {...decoratedData};
    testmethod(e){
        console.log(e);
    }
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
                                                return parent.children.map(child => {
                                                    return (<tr>
                                                        <td>
                                                            <span className="badge badge-dot">
                                                                <i className="bg-success"></i>
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
                                                            <Form.Control size="sm" type="number" placeholder="Amount" value={child.value} onChange="testmethod" />
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <span className="mr-2">60%</span>
                                                                <div>
                                                                    <ProgressBar className="mt-3">
                                                                        <ProgressBar variant="success" now={60} key={1} />
                                                                    </ProgressBar>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                })
                                            })}
                                            
                                            <tr className="table-success">
                                                <td>
                                                    <span className="badge badge-dot">
                                                        <i className="bg-primary"></i>
                                                    </span>
                                                    Savings
                                                </td>
                                                <th scope="row">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">Save</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    180 
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="mr-2">10%</span>
                                                        <div>
                                                            <ProgressBar className="mt-3">
                                                                <ProgressBar variant="success" now={10} key={1} />
                                                            </ProgressBar>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="table-dark">
                                                <td>
                                                </td>
                                                <th scope="row">
                                                    Total
                                                </th>
                                                <td>
                                                    1800 
                                                </td>
                                                <td>
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
