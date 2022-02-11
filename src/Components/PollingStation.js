import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import cand1 from '../assets/cand1.png';
import cand2 from '../assets/cand2.png';

const PollingStation = (props) => {
	const [cand1Url, changeCand1Url] = useState(cand1);
	const [cand2Url, changeCand2Url] = useState(cand2);
	const [displayResults, alterResultsDisplay] = useState(false);

	return (
		<Container>
			<Row>
				<Col className='justify-content-center d-flex'>
					<Container>
						<Row style={{ marginTop: '8vh', backgroundColor: "#E3DEDD" }}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '2vw'
							}}>
								<img style={{ 
									height: '30vh',
									width: '15vw'
								}}
									src={ cand1Url }>
								</img>
							</div>
						</Row>
						{ displayResults? <Row className='justify-content-center d-flex' style={{
							marginTop: '2vh',
							width: '10vw'
						}}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								fontSize: '3vw',
								padding: '12px',
								backgroundColor: '#E3DEDD'
							}}>3</div>
						</Row>:null }
						<Row className='justify-content-center d-flex' style={{
							marginTop: '1vh',
							width: '10vw'
						}}>
							<Button style={{
								backgroundColor: 'green',
								border: 'none'
							}}>vote</Button>
						</Row>
					</Container>
				</Col>
				<Col className='justify-content-center d-flex'>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						backgroundColor: '#E3DEDD',
						height: '18vh',
						alignItems: 'center',
						padding: '3vw',
						textAlign: 'center',
						marginTop: '8vh'
					}}>who'd win the nairobi gubernatorial seat?</div>
				</Col>

				<Col className='justify-content-center d-flex'>
					<Container>
						<Row style={{ marginTop: '8vh', backgroundColor: "#E3DEDD" }}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '2vw'
							}}>
								<img style={{ 
									height: '30vh',
									width: '15vw'
								}}
									src={ cand2Url }>
								</img>
							</div>
						</Row>
						{ displayResults? <Row className='justify-content-center d-flex' style={{
							marginTop: '2vh',
							width: '10vw'
						}}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								fontSize: '3vw',
								padding: '12px',
								backgroundColor: '#E3DEDD'
							}}>3</div>
						</Row>:null }
						<Row className='justify-content-center d-flex' style={{
							marginTop: '1vh',
							width: '10vw'
						}}>
							<Button style={{
								backgroundColor: 'green',
								border: 'none'
							}}>vote</Button>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default PollingStation;