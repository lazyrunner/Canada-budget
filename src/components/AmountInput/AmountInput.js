import { Card, Row, Col, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state/index"

export default function AmountInput() {
    const salary = useSelector((state) => state.salary);
    const dispatch = useDispatch();
    const { updateTax, updateWorkDays, updateYearly, updateHourly } = bindActionCreators(actionCreators, dispatch);
    return (

        <Row xs={1} md={2} className="g-4">
            <Col>
                <Card border="dark" bg="secondary" text="white" >
                    <Card.Header >Yearly Rate</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
                                    <FormControl type="number" aria-label="Large" placeholder="Yearly amount" value={salary.yearly} onChange={(e)=>{updateYearly(e.target.value)}} />
                                </InputGroup>
                            </Row>
                            <Row className="pt-2">
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">%</InputGroup.Text>
                                    <FormControl type="number" aria-label="Large" placeholder="Tax Rate" value={salary.tax} onChange={(e)=>{updateTax(e.target.value)}} />
                                </InputGroup>
                            </Row>
                            <ProgressBar className="mt-3">
                                <ProgressBar variant="warning" now={((salary.yearly*(salary.tax/100))/salary.yearly)*100} key={2} label={(salary.yearly*(salary.tax/100)).toFixed(0)} />
                                <ProgressBar variant="success" now={(salary.afterTax/salary.yearly)*100} key={1} label={salary.afterTax.toFixed(0)} />
                            </ProgressBar>
                            <Row className="pt-3">
                                <Col sm={3}></Col>
                                <Col sm={3}>Tax</Col>
                                <Col sm={3} className="float-right">$ {(salary.yearly*(salary.tax/100)).toFixed(2)}</Col>
                                <Col sm={3}></Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>After Taxes</Col>
                                <Col sm={3} className="float-right">$ {salary.afterTax.toFixed(2)}</Col>
                                <Col sm={3}></Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>Monthly After Taxes</Col>
                                <Col sm={3} className="float-right">$ {(salary.afterTax/12).toFixed(2)}</Col>
                                <Col sm={3}></Col>
                            </Row>


                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card border="dark" bg="secondary" text="white" >
                    <Card.Header >Hourly Rate</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">$</InputGroup.Text>
                                    <FormControl type="number" aria-label="Large" placeholder="Hourly amount" value={salary.hourly} onChange={(e)=>{updateHourly(e.target.value)}}  />
                                </InputGroup>
                            </Row>
                            <Row className="pt-2">
                                <Col>
                                    <InputGroup size="lg">
                                        <InputGroup.Text id="inputGroup-sizing-lg">%</InputGroup.Text>
                                        <FormControl type="number" aria-label="Large" placeholder="Tax Rate" value={salary.tax} onChange={(e)=>{updateTax(e.target.value)}}  />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup size="lg">
                                        <InputGroup.Text id="inputGroup-sizing-lg">Days</InputGroup.Text>
                                        <FormControl type="number" aria-label="Large" placeholder="Number of working days" value={salary.workDays} onChange={(e)=>{updateWorkDays(e.target.value)}} />
                                    </InputGroup>
                                </Col>

                            </Row>
                            <ProgressBar className="mt-3">
                                <ProgressBar variant="warning" now={((salary.hourly*salary.tax/100)/salary.hourly*100).toFixed(2)} key={2} label={(salary.hourly*salary.tax/100).toFixed(2)} />
                                <ProgressBar variant="success" now={((salary.hourly-(salary.hourly*salary.tax/100))/salary.hourly*100).toFixed(2)} key={1} label={(salary.hourly-(salary.hourly*salary.tax/100)).toFixed(2)} />
                            </ProgressBar>
                            <Row className="pt-3">
                                <Col sm={3}>Before Tax</Col>
                                <Col sm={3} className="float-right">$ {(salary.hourly * salary.workDays * 8).toFixed(2)}</Col>
                                <Col sm={3}>Tax</Col>
                                <Col sm={3} className="float-right">$ {(salary.hourly * salary.workDays * 8 * (salary.tax/100)).toFixed(2)}</Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>After Taxes</Col>
                                <Col sm={3} className="float-right">$ {salary.afterTax.toFixed(2)}</Col>
                                <Col sm={3}></Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>Monthly After Taxes</Col>
                                <Col sm={3} className="float-right">$ {(salary.afterTax/12).toFixed(2)}</Col>
                                <Col sm={3}></Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
