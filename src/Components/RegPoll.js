import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const NewPoll = (props) => {
	const candidate1Name = useRef();
	const candidate1Image = useRef();

	const candidate2Name = useRef();
	const candidate2Image = useRef();

	const promptRef = useRef();

	return (
		<Container style={{
			marginTop: '8vh'
		}}>
			<Form>
				<Form.Group className='mb-3'>
					<Form.Label>1st Candidate's Name:</Form.Label>
					<Form.Control 
						ref={candidate1Name}
						placeholder="enter 1st candidate's name ...">
					</Form.Control>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>1st Candidate's Image:</Form.Label>
					<Form.Control 
						ref={candidate1Image}
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
						ref={candidate2Image}
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
			</Form>

			<Button variant='primary' style={{
				marginTop: '2vh',
				backgroundColor: 'green',
				border: 'none'
			}}>Register</Button>
		</Container>
	);
};

export default NewPoll;