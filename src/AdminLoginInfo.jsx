import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Toast, Card, Carousel, Container, Accordion, Jumbotron, Alert } from 'react-bootstrap';

import User from './User';
import Admin from './Admin';
import { Link } from 'react-router-dom';

function LoginInfo(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                            <br />
                            {/* <Button variant="primary">LOGIN</Button> */}
                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => setShow(true)} >LOGIN</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ marginRight: '10%', marginBottom: '10%', marginLeft: '10%' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/1b936b68-e1ce-4142-ae20-609a59f1adb9/Personal/Home/content/Hero%20Banners/Feb-2021/RBI-FL-Week-Carousel-banners-A-716-x-298-Eng.jpg" height="300"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/aa82a58f-2854-4017-a7c7-7eb9c87819ce/Personal/Home/content/Budget-Dictionary-Website-Banner-716X298.png" height="300"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b88164fe-52f1-4c8a-bebb-640a75e28ba3/Personal/Home/content/Hero%20Banners/Jan-2021/Tax-Saving-FD-Home-Page-Carousel-716-298.jpg" height="300"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* </div> */}

                    {/* <div style={{ marginRight: '100px'}}> */}
                    {/* <div style={{ marginLeft: '39%', marginTop: '20px'}}> */}

                    <Row style={{ marginLeft: '39%' }}>
                        <Col xs={6}>
                            <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
                                <Toast.Header>
                                    <img
                                        src="holder.js/20x20?text=%20"
                                        className="rounded mr-2"
                                        alt=""
                                    />
                                    <strong className="mr-auto"><b>Personal Home Page</b></strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>

                                    <Link class="btn btn-primary mr-2" to='/admin'>Admin Login</Link><br /><br />
                                    <Link class="btn btn-primary mr-2" to='/user'>User Login</Link>

                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
                <Container>

                    {/* <Carousel className="C1" defaultActiveIndex='3'>
          <Carousel.Item interval={100}>
            <img
              className="d-block w-100" height="300" width="100"
 
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/heroq.jpg?RV9Bjige7_b1rqOt.01OrFbUgqTlRwtG"
 
            />
            <Carousel.Caption>
              <h3>ABC Retail Banking</h3>
 
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={200}>
            <img
              className="d-block w-100" height="300" width="100"
 
              src="https://th.bing.com/th/id/R468e86a424b13f0eb531ae6298b7ea22?rik=sY2%2fdSPECVRieg&riu=http%3a%2f%2f1.bp.blogspot.com%2f--OJdvvQpVAc%2fVh3yl52DllI%2fAAAAAAAAEIs%2foS-_XQaBzPI%2fs1600%2fbanking1.jpg&ehk=MM1BSw%2fotD6NfQixrIW43iLOBp9p6KlP3GDaYKBoC%2fQ%3d&risl=&pid=ImgRaw"
 
            />
 
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" height="300" width="100"
 
              src="https://tse3.mm.bing.net/th/id/OIP.u7YMJJmMr7MfrEONPHr2OgHaE8?pid=ImgDet&rs=1"
 
            />
            <Carousel.Caption interval={100}>
              <h3>ABC Retail Banking</h3>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br /> */}



                    {/* <Button>Types of Loan's</Button> */}

                    <center>
                        <Alert variant="light" > <b>Types of Loans</b> </Alert>
                    </center>

                    <Row>
                        <Col>
                            <Card className="gallery" style={{ width: '15rem' }}>

                                <Card.Img variant="top" src="https://th.bing.com/th/id/R592f542477fb341e402bf1ea151481f4?rik=w6h6SvAMS1tx4g&riu=http%3a%2f%2fwww.propreview.in%2fwp-content%2fuploads%2f2016%2f07%2fVigilant.jpg&ehk=bUPNnmas5aK0D0FE89t9Ifn%2bFHejeyOzhCsVtuhShnU%3d&risl=&pid=ImgRaw" />
                                <Card.Title>Home Loan</Card.Title>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://www.myayan.com/assets/images/art/top-car-loan-banks-in-dubai.webp" />
                                <Card.Title>Vehicle Loan</Card.Title>
                            </Card>
                        </Col>

                        <Col>

                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/Rbe309c6a725de1104047e7c4f25af094?rik=O%2fL2%2bJMBa5koGg&riu=http%3a%2f%2ftechsciblog.com%2fwp-content%2fuploads%2f2019%2f09%2fIndia-Personal-Loan-Market-2.jpg&ehk=JOEj%2fVFufvO7Cksk1HZ7ajBcdnuJasMH0nLDVnMjtU8%3d&risl=&pid=ImgRaw" />
                                <Card.Title>Personal Loan</Card.Title>
                            </Card>
                        </Col>
                        <Col> <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://th.bing.com/th/id/R8096e1e547393d78030e624aa0dfe93b?rik=6iUl%2fbqxF%2bJXRg&riu=http%3a%2f%2fnagpurtoday.in%2fwp-content%2fuploads%2f2013%2f02%2feducation-loan-advantage.jpg&ehk=a4BGbNNqS6qUlLJ8RgJCzelH2IbZOxH57kOix1Hb4Ss%3d&risl=&pid=ImgRaw" />
                            <Card.Title>Education Loan</Card.Title>
                        </Card></Col>

                    </Row><br />
                    <center>
                        <Alert variant="light" > <b>Ways of  Banking</b> </Alert>
                    </center>
                    
                    <Jumbotron>

                        <Row>
                            <Col sm={8}>
                                <Card >
                                    <img
                                        className="d-block w-100" height="250" width="100"

                                        src="https://www.dccu.us/blog/wp-content/uploads/2017/01/the-way-we-bank-infographic.jpg"

                                    />


                                </Card>
                            </Col>
                            <Col className="waylink">
                                <Accordion>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">Mobile Banking</Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>

                                                <Card.Img variant="top" src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/e99a3828-381a-40bb-9b6d-ae54c41238af/Personal/Home/content/MB_App_Icon1.png" /><hr />

                                                <Card.Text>100+ transactions on a variety of phones and Tablets</Card.Text>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="1">Online Banking</Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>

                                                <Card.Img variant="top" src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/760f65fe-b7d9-4837-b9fa-c0459952a2bc/Personal/Home/images/20b-online-icon.png" /><hr />

                                                <Card.Text>Make over  200 transactin from your comfort of your home or office</Card.Text>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="2"> Personal Banking</Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>

                                                <Card.Img variant="top" src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b12df01f-3385-4969-a132-a47240ae84f3/Personal/Home/images/20a-inperson-icon.png" /><hr />
                                                <Card.Text>Make over  200 transactin from your comfort of your home or office</Card.Text>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="3">Phone Banking</Accordion.Toggle>

                                        </Card.Header>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <Card.Img variant="top" src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/d8440753-8d1b-46aa-81f1-812ca1e820c7/Personal/Home/content/phone-banking-icon.png" /><hr />

                                                <Card.Text>Banking services are a just a voice call or SMS away</Card.Text>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>
                    </Jumbotron>

                </Container>
                <Jumbotron style={{ backgroundColor: 'skyblue' }}>
                    <Row>
                        <Col>
                            <h5>About Us</h5>
                            <ul>
                                <li>Overview</li>
                                <li>Other Stakeholders' Information</li>
                                <li>Investor Relations</li>
                                <li>News Room</li>
                                <li>Corporate Governance</li>
                                <li>Careers</li>
                                <li>CSR</li>
                                <li>Regulatory Disclosu</li>

                            </ul>
                        </Col>
                        <Col>
                            <h5>Resources</h5>
                            <ul>
                                <li>We Care For You</li>
                                <li>Rates</li>
                                <li>Glossary</li>
                                <li>Watch Videos</li>
                                <li>Learning Centre</li>
                                <li>Important Notices</li>
                                <li>Forms Centre</li>
                                <li> Fees & Charges</li>
                                <li>Online Service</li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Calculations</h5>
                            <ul>
                                <li>Personal Loan EMI Calculator</li>
                                <li>Car Loan EMI Calculator</li>
                                <li>Two Wheeler EMI Calculator</li>
                                <li>Recurring Deposit Calculator</li>
                                <li>Fixed Deposit Calculator</li>

                            </ul>
                        </Col>
                        <Col>
                            <h5>Need Help</h5>
                            <ul>
                                <li>FAQs</li>
                                <li>Customer Care</li>
                                <li>Contact Us</li>
                                <li>Use Of Unparliamentary Language By Customers</li>
                                <li>Active Channel Partners</li>
                                <li>DNC Dedupe</li>
                                <li> Locate Us</li>
                                <li>Do-Not-Call-Regist</li>
                            </ul></Col>
                        <Col>
                            <h5>Connect</h5>
                            <ul>
                                <li>
                                    <img
                                        alt="user"
                                        src="https://th.bing.com/th/id/Rf8d945f7e943938cc287e25303825a88?rik=CRIwDEexRHLbew&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fofficial-facebook-icon-png-4.png&ehk=TeN6WlGE91iCxKHC5FtOYZU52YqSr3cwzNle1iACbXM%3d&risl=&pid=ImgRaw"
                                        width="30"
                                        height="20"
                                        className="d-inline-block align-top"
                                    />Facebook</li>
                                <li><img
                                    alt="user"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_(2013-2017).svg/512px-YouTube_play_button_square_(2013-2017).svg.png"
                                    width="30"
                                    height="20"
                                    className="d-inline-block align-top"
                                />YouTube</li>
                                <li><img
                                    alt="user"
                                    src="https://tse4.mm.bing.net/th/id/OIP.4F21mhsSQSqVbAtH6DBalQAAAA?pid=ImgDet&rs=1"
                                    width="30"
                                    height="20"
                                    className="d-inline-block align-top"
                                />Twitter</li>
                                <li><img
                                    alt="user"
                                    src="https://www.quest.nhs.uk/wp-content/themes/haelo-quest/images/linkedin-icon-rollover.png"
                                    width="30"
                                    height="20"
                                    className="d-inline-block align-top"
                                />Linkedin</li>
                                <li><img
                                    alt="user"
                                    src="https://www.lawforgood.org.uk/wp-content/uploads/2017/09/Email-Icon.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />Email:<br />ABCRetailBanking@abc.com</li>
                            </ul>
                        </Col>
                    </Row>

                </Jumbotron>

            </Fragment>
        </div>

    )
}
// render(<LoginInfo />);
export default LoginInfo;