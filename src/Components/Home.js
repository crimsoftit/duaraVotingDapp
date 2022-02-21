import { Tab } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';

const Home = (props) => {
    const [promptsList, updatePromptsList] = useState([]);

    useEffect(() => {
        const getPrompts = async () => {
            updatePromptsList(await window.contract.getAllPrompts());
            console.log(await window.contract.getAllPrompts());
        };
        getPrompts();
    }, []);

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
                        promptsList.map((el,index) => {
                            return (
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{el}</td>
                                <td>
                                    {" "}
                                    <Button onClick={ () => props.updateCandidates(el) } style={{
                                        backgroundColor: 'green',
                                        border: 'none'
                                    }}>Visit Pollbooth
                                    </Button>
                                </td>
                            </tr>
                            )})
                    }
                    
                </tbody>
            </Table>
        </Container>
    );
};

export default Home;