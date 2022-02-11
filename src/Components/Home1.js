import React, {Component} from 'react';
import { Container, Button, Table } from 'react-bootstrap';

export class Home extends React.Component {
    
	render() {
        const promptList = ["who will win the kenyan presidential elections?", "who will win the Nairobi gubernatorial seat?"];
        return (
            <Container>
                <Table style={{ margin: "5px" }} responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Polls</th>
                            <th>Poll details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            promptList.map((el,index) => {
								return (
									<tr key={index}>
                                    <td>{index + 1}</td>
									<td>{el}</td>
									<td>
										{" "}
										<Button>Poll details</Button>
									</td>
                                </tr>
								)})
                        }
                        
                    </tbody>
                </Table>
            </Container>
        )
	}
}