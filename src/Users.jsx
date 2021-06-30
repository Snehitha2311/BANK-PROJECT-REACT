import React, { Fragment, useState, useEffect, cloneElement } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem, Row, Col, CardColumns } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const Users = (props) => {
    const [user, setUser] = useState({
        name: ' ',
        username: ' ',
        email: ' ',
        phone: ' ',
        website: ' ',
        aadhar: ' ',
        pan: '',
        balance: ' ',
        cType: ' ',
        sType: ' ',
        currentbalance: '0',
        account: ''

    });
    const [showButton, setShowBotton] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    const userButton = () => {
        props.history.push('/addamount');
    }
    const currentAddAmount = () => {
        props.history.push('/currentadd');
    }
    const userButton1 = () => {
        props.history.push('/subamount');
    }
    const currentWithAmount = () => {
        props.history.push('/currentsub');
    }
    const currentButton = () => {
        setShowBotton(!true);
    }
    const savingsButton = () => {
        setShowBotton(true);
    }
    const setData = (falg) => {
        sessionStorage.setItem('from', falg)
    }
    return (
        <center>


            <div className="userpage">
                <h3 > User Id :{id}</h3>
                <h3 > Account No :{user.account}</h3>
                {/* <Row>
                    <Col className="currentImage">
                        <Card className="gallery" style={{ width: '15rem' }}>
 
                            <Card.Img variant="top" src="https://www.cnsbank.co.in/images/c-account.jpg" />
                            <Button variant="dark" onClick={currentButton}>Current</Button>{' '}
                        </Card>
                    </Col>
                    <Col className="savingImage">
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://www.jagoinvestor.com/wp-content/uploads/files/Basic-savings-bank-account.png" />
                            <Button variant="dark" onClick={savingsButton}>savings</Button>
                        </Card>
                    </Col>
                </Row> */}
                <CardColumns>
                    <Card style={{ width: '10rem', marginLeft: '450px' }}>
                        <Card.Img variant="top" src="https://webassets.mongodb.com/_com_assets/cms/Current%20Meta%20Image%202020-k82kucqarq.png" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={currentButton} block>Current</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card >
                    <Card style={{ width: '10rem',marginLeft: '200px' }} className="">
                        <Card.Img variant="top" src="https://www.goodreturns.in/img/2018/04/savings-1523847922.jpg" height='150px' width='15px' />
                        <Card.ImgOverlay>
                            <Card.Title style={{ textAlign: 'center' }}></Card.Title>
                            <Card.Text style={{ color: 'white', fontFamily: 'serif', fontSize: '40px', textAlign: 'center', marginTop: '90px' }} ><Button variant="primary" size="sm" onClick={savingsButton} block>Savings</Button></Card.Text>
                        </Card.ImgOverlay>

                    </Card>
                </CardColumns>

                {/* <Button variant="white" onClick={currentButton}>Current</Button>

                <Button variant="white" onClick={savingsButton}>Savings</Button><hr />  */}
                
                <br />
                {/* <Card className='demo1' style={{ width: '40rem', marginLeft: "40px" }}>
                    <Card.Body >
                        <Card.Title className='demo'><b>User Id: {id}</b></Card.Title>
                        <Card.Text className='demo'> */}



                {/* <Button variant="white" onClick={currentButton}>Current</Button>

                            <Button variant="white" onClick={savingsButton}>Savings</Button> */}
                <div className='demo' style={{ width: '40rem', marginLeft: "40px" }}>
                    {
                        showButton === true && (
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton}>Add Amount</button>
                                <button class="btn btn-outline-primary btnAdd" onClick={userButton1}>Withdraw Amount</button>
                                <Link class='btn btn-outline-primary' onClick={setData('Savings')} to={`/mini/${user.id}`}>Mini Statement</Link> 
                                <br /><br />
                                <ListGroup>
                                    {/* <div style={{ display: 'flex', justifyContent: "space-between" }}> */}
                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.balance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.sType}</ListGroup.Item>
                                    {/* </div> */}
                                    <br />
                                    {/* <Link className="btn btn-primary" to="/home">Back to Home</Link> */}
                                </ListGroup>
                            </div>
                        )}{(showButton === false &&
                            <div>
                                <hr />
                                <button class="btn btn-outline-primary btnAdd" onClick={currentAddAmount}>Add Amount</button>
                                <button class="btn btn-outline-primary btnAdd" onClick={currentWithAmount}>Withdraw Amount</button>
                                <Link class='btn btn-outline-primary' onClick={setData('Current')} to={`/mini/${user.id}`}>Mini Statement</Link>
                                <br /><br />
                                <ListGroup>
                                    {/* <div style={{ display: 'flex', justifyContent: "space-between" }}> */}
                                    <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                    <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                    <ListGroup.Item>Account No : {user.account}</ListGroup.Item>
                                    <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                    <ListGroup.Item>Balance : {user.currentbalance}</ListGroup.Item>
                                    <ListGroup.Item>Account Type : {user.cType}</ListGroup.Item>
                                    {/* </div> */}
                                    <br />
                                    {/* <Link className="btn btn-primary" to="/home">Back to Home</Link> */}
                                </ListGroup>
                            </div>
                        )}
                </div>
                

                {/* </Card.Text>
                    </Card.Body>
                </Card> */}

            </div><br />

            {/* <Link className="btn btn-primary" to="/home">Back to Home</Link>  */}
        </center>

    )

}
export default Users;