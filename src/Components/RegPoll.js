import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const RegPoll = (props) => {
	const candidate1Name = useRef();
	const candidate1ImageUrl = useRef();

	const candidate2Name = useRef();
	const candidate2ImageUrl = useRef();

	const promptRef = useRef();

	const deployToNear = async () => {
		await window.contract.addURL ({
			name: candidate1Name.current.value,
			url: candidate1ImageUrl.current.value,
		});
		await window.contract.addURL ({
			name: candidate2Name.current.value,
			url: candidate2ImageUrl.current.value,
		});
		await window.contract.addCandPair ({
			prompt: promptRef.current.value,
			cand1: candidate1Name.current.value,
			cand2: candidate2Name.current.value,
		});
		await window.contract.addToPrompts ({
			prompt: promptRef.current.value,
		});
	}

	return (

		

		<Container >

			<Row className="mb-3" style={{
				marginTop: '2vh',
				marginBottom: '5vh',
				textAlign: 'center'
			}}>
				<h3 style={{ margin: '0 auto'}}>Register a poll</h3>	
			</Row>
			<hr />

			<Form style={{
				marginTop: '4vh'
			}}>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCand1Name">
						<Form.Label>1st Candidate's Name:</Form.Label>
						<Form.Control 
							ref={candidate1Name}
							placeholder="enter 1st candidate's name ...">
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridCand1Img">
						<Form.Label>1st Candidate's Image:</Form.Label>
						<Form.Control 
							ref={candidate1ImageUrl}
							placeholder="enter 1st candidate's image url ...">
						</Form.Control>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCand2Name">
						<Form.Label>2nd Candidate's Name:</Form.Label>
						<Form.Control 
							ref={candidate2Name}
							placeholder="enter 2nd candidate's name ...">
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridCand2Img">
						<Form.Label>2nd Candidate's Image:</Form.Label>
						<Form.Control 
							ref={candidate2ImageUrl}
							placeholder="enter 2nd candidate's image url ...">
						</Form.Control>
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridPrompt">
					<Form.Label>Prompt</Form.Label>
					<Form.Control
						ref={promptRef}
						placeholder='add prompt ...'>
					</Form.Control>
				</Form.Group>

				<Button onClick={ deployToNear } variant='primary' style={{
					marginTop: '2vh',
					backgroundColor: 'green',
					border: 'none'
				}}>Register</Button>
			</Form>






			{/* <Form>
				
				<Form.Group className='mb-3'>
					<Form.Label>1st Candidate's Image:</Form.Label>
					<Form.Control 
						ref={candidate1ImageUrl}
						placeholder="enter 1st candidate's image url ...">
					</Form.Control>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>2nd Candidate's Name:</Form.Label>
					<Form.Control 
						ref={candidate2Name}
						placeholder="enter 2nd candidate's name ...">
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>2nd Candidate's Image:</Form.Label>
					<Form.Control 
						ref={candidate2ImageUrl}
						placeholder="enter 2nd candidate's image url ...">
					</Form.Control>
				</Form.Group> 

				<Form.Group>
					<Form.Label>Prompt</Form.Label>
					<Form.Control
						ref={promptRef}
						placeholder='add prompt ...'>
					</Form.Control>
				</Form.Group>
			</Form> */}

			
		</Container>
	);
};

export default RegPoll;