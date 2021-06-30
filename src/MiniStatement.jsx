import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Table } from 'react-bootstrap';

function MiniStatement () {
    const [user, setUser] = useState({

        username: ' ',
        balance: ' ',
        transaction: []

    });
    const from = sessionStorage.getItem('from');
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    }
    return (
        <div
        style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69jIsh3MPHXSxcoE-TB6SSf_qTkvr7X14uA&usqp=CAU")`, backgroundRepeat: 'no-repeat', width: '1300px', height: '1100px', backgroundSize: 'cover' 
        }}>
        <div>
            <h3><center>Mini Statement</center></h3>
            <Link class='btn btn-outline-primary btnAdd' to={'/userpage'} block >Previous</Link>
            <Card className="miniCard" style={{backgroundColor:"lightblue"}}>
                <p><center>Account Holder Name: <b>{user.name}</b></center></p>
                {from === 'Current' ? <p><center>Account Balance: <b>{user.currentbalance}</b></center></p>: <p><center>Account Balance: <b>{user.balance}</b></center></p>   }
                

                <Table striped bordered hover variant="primary">
                    <thead>
                        <tr>
                            
                            <th>Transaction Type</th>
                            <th>Amount</th>
                            <th>Account Type</th>
                            <th>Date and Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.transaction.map(tran => tran.accountType === from ?  (
                                <tr>
                                    <td>{tran.type}</td>
                                    <td>{tran.amount}</td>
                                    <td>{tran.accountType}</td>
                                    <td>{tran.dateTime}</td>
                                </tr>
                            ) :  (<tr>
                                
                            </tr>)
                             ) }
                    </tbody>
                </Table>
               
            </Card>

        </div>
        </div>
    )
}
export default MiniStatement;