import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export class PollingStation extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className='justify-content-center d-flex'>
						<Container>
							<Row style={{ marginTop: '5vh', backgroundColor: "gray" }}>
								<div style={{
									display: 'flex',
									justifyContent: 'center',
									padding: '2vw'
								}}>
									<img style={{ height: '30vh', width: '15vw' }}
										src={ candidateUrl }>
									</img>
								</div>
							</Row>
						</Container><h1>PollingStation</h1>
					</Col>
				</Row>
			</Container>
		)
	}
}
