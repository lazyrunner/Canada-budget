import { Card, Row, Col, InputGroup, FormControl, ProgressBar } from 'react-bootstrap';

export default function AmountInput() {
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
                                    <FormControl type="number" aria-label="Large" placeholder="Yearly amount" />
                                </InputGroup>
                            </Row>
                            <Row className="pt-2">
                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">%</InputGroup.Text>
                                    <FormControl type="number" aria-label="Large" placeholder="Tax Rate" />
                                </InputGroup>
                            </Row>
                            <ProgressBar className="mt-3">
                                <ProgressBar variant="warning" now={25} key={2} label="25" />
                                <ProgressBar variant="success" now={75} key={1} label="75" />
                            </ProgressBar>
                            <Row className="pt-3">
                                <Col sm={3}></Col>
                                <Col sm={3}>Tax</Col>
                                <Col sm={3} className="float-right">$ 250</Col>
                                <Col sm={3}></Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>After Taxes</Col>
                                <Col sm={3} className="float-right">$ 250</Col>
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
                                    <FormControl type="number" aria-label="Large" placeholder="Hourly amount" />
                                </InputGroup>
                            </Row>
                            <Row className="pt-2">
                                <Col>
                                    <InputGroup size="lg">
                                        <InputGroup.Text id="inputGroup-sizing-lg">%</InputGroup.Text>
                                        <FormControl type="number" aria-label="Large" placeholder="Tax Rate" />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup size="lg">
                                        <InputGroup.Text id="inputGroup-sizing-lg">Days</InputGroup.Text>
                                        <FormControl type="number" aria-label="Large" placeholder="Number of working days" />
                                    </InputGroup>
                                </Col>

                            </Row>
                            <ProgressBar className="mt-3">
                                <ProgressBar variant="warning" now={25} key={2} label="25" />
                                <ProgressBar variant="success" now={75} key={1} label="75" />
                            </ProgressBar>
                            <Row className="pt-3">
                                <Col sm={3}>Before Tax</Col>
                                <Col sm={3} className="float-right">$ 250</Col>
                                <Col sm={3}>Tax</Col>
                                <Col sm={3} className="float-right">$ 250</Col>
                            </Row>
                            <Row className="pt-1">
                                <Col sm={3}></Col>
                                <Col sm={3}>After Taxes</Col>
                                <Col sm={3} className="float-right">$ 250</Col>
                                <Col sm={3}></Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
