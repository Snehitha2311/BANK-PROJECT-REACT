import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserView = (props) => {
    const [user, setUser] = useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    pan: ""
                });
                const { id } = useParams();
                useEffect(() => {
                    loadUser();
                }, []);
        
                const loadUser = async () => {
                    const res = await axios.get(`http://localhost:3003/users/${id}`);
                    setUser(res.data);
                }
        
                return (
                    <Fragment>
                    <div className="userview">
                        <Card style={{ width: '24rem' , marginLeft: '450px'}}>
                            <Card.Body>
                                <Card.Title className='demo'>User Id</Card.Title><br />
                                <Card.Text>
                                    <ListGroup>
                                        {/* <div style={{ display: 'flex', justifyContent: "space-between" }}> */}
                                        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                        <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                        <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                        {/* </div> */}
                                        <br />
                                        <Link className="btn btn-primary" to="/home">Back to Home</Link>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
        
        
        </div>
        
            </Fragment>
    // const [user, setUser] = useState({
    //     name: ' ',
    //     username: ' ',
    //     email: ' ',
    //     phone: ' ',
    //     website: ' ',
    //     AdharNO: ' ',
    //     balance: ' ',
    //     cType: ' ',
    //     sType: ' ',
    //     currentBalance: 0,

    // });
    // const [showButton, setShowBotton] = useState(null);

    // const { id } = useParams();
    // useEffect(() => {
    //     loadUser();
    // }, []);

    // const loadUser = async () => {
    //     const res = await axios.get(`http://localhost:3003/users/${id}`);
    //     setUser(res.data);
    // }
    // const userButton = () => {
    //     props.history.push('/addamount');
    // }
    // const currentAddAmount = () => {
    //     props.history.push('/currentadd');
    // }
    // const currentButton = () => {
    //     setShowBotton(!true);
    // }
    // const savingsButton = () => {
    //     setShowBotton(true);
    // }
    // return (
    //     <center>

    //         <div>
    //             <h1 className="display-4"> User Id :{id}</h1>
    //             <hr />
    //             <Button variant="white" onClick={currentButton}>Current</Button>

    //             <Button variant="white" onClick={savingsButton}>Savings</Button><hr />

    //             {
    //                 showButton === true && (<div>
    //                     {/* <button class="btn btn-outline-primary btnAdd" onClick={userButton}>Add Amount</button> */}

    //                     <ul className="list-group w-50">
    //                         <li className="list-group-item">Name : {user.name}</li>
    //                         <li className="list-group-item">Username : {user.username}</li>
    //                         <li className="list-group-item">Email: {user.email}</li>
    //                         <li className="list-group-item">Mobile : {user.phone}</li>
    //                         <li className="list-group-item">Website : {user.website}</li>
    //                         <li className="list-group-item"> AdharNO: {user.AdharNO}</li>
    //                         <li className="list-group-item">Balance : {user.balance}</li>
    //                         <li className="list-group-item">Account Type : {user.sType}</li>
    //                     </ul>
    //                 </div>
    //                 )}{(showButton === false &&
    //                     <div>
    //                         {/* <button class="btn btn-outline-primary btnAdd" onClick={currentAddAmount}>Add Amount</button> */}

    //                         <ul className="list-group w-50">
    //                             <li className="list-group-item">Name : {user.name}</li>
    //                             <li className="list-group-item">Username : {user.username}</li>
    //                             <li className="list-group-item">Email: {user.email}</li>
    //                             <li className="list-group-item">Mobile : {user.phone}</li>
    //                             <li className="list-group-item">Website : {user.website}</li>
    //                             <li className="list-group-item"> AdharNO: {user.AdharNO}</li>
    //                             <li className="list-group-item">Balance : {user.currentBalance}</li>
    //                             <li className="list-group-item">Account Type: {user.cType}</li>
    //                         </ul>
    //                     </div>

    //                 )}
    //         </div>


    //     </center>
 

 )

}
export default UserView;
