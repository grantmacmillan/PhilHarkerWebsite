import PhilipsSelfie from "../assets/philip-selfie.png";
import { Container, Card, CardBody, Row, Col } from 'react-bootstrap';


const HomeScreen = () => {
    return (
        <div className="container my-4">
            
            <Container style={{textAlign: 'center'}} className="hero">
            <h1 className="mb-3">Home Page</h1>
            <img src={PhilipsSelfie} width="450" className="img-fluid mb-3"></img>

            <p className="lead">Hello. My name is Philip. I do a bit of everything.</p>

            <div>
                <a href="https://philidips.substack.com" className="btn btn-primary me-2">My Newsletter</a>
                <a href="/contact" className="btn btn-secondary">My Contact</a>
            </div>
            </Container>

            <Container>
            <h2 style={{textAlign: 'center'}}>How can I help you today?</h2>
                <Row>
                    <Col>
                        <Card>
                            <h3>I want to commission writing from Philip.</h3>
                            <CardBody>
                                Well, thank you! The Writing page contains samples of my past work across all genres and media.
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h3>I want to see Philip's games and programming.</h3>
                            <CardBody>
                                The Software page covers all of that, both personal and professional.
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h3>I want to see Philip's scientific CV.</h3>
                            <CardBody>
                                From published work to particularly good school projects, it's all in the Ecology page.
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeScreen;