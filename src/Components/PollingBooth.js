import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import cand1 from '../assets/aspirant1.jpg';
import cand2 from '../assets/aspirant2.jpg';

const PollingBooth = (props) => {
	const [cand1Url, changeCand1Url] = useState(cand1);
	const [cand2Url, changeCand2Url] = useState(cand2);
	const [displayResults, updateResultsDisplay] = useState(false);
	const [btnStatus, updateBtnStatus] = useState(false);
	const [cand1Votes, updateCand1Votes] = useState("--");
	const [cand2Votes, updateCand2Votes] = useState("--");
	const [prompt, updatePrompt] = useState("--");

	useEffect(() => {

		const fetchDetails = async () => {

			// update votes
			let noOfVotes = await window.contract.getVotes({
				prompt: localStorage.getItem('prompt'),
			});
			updateCand1Votes(noOfVotes[0])
			updateCand2Votes(noOfVotes[1])

			// update image urls
			// changeCand1Url(
			// 	await window.contract.getURL({
			// 		name: localStorage.getItem('candidate_1'),
			// 	})
			// );
			// changeCand2Url(
			// 	await window.contract.getURL({
			// 		name: localStorage.getItem('candidate_2'),
			// 	})
			// );
			updatePrompt(localStorage.getItem('prompt'));

			// check voter's voting status
			let voteStatus = await window.contract.didVote({
				prompt: localStorage.getItem('prompt'),
				voter: window.accountId
			})

			updateResultsDisplay(voteStatus);
			updateBtnStatus(voteStatus);
		}
		fetchDetails();
	}, []);

	const addVote = async (index) => {
		await window.contract.incrementVote ({
			prompt: localStorage.getItem("prompt"),
			index: index
		});
		await window.contract.storeVoter ({
			prompt: localStorage.getItem("prompt"),
			voter: window.accountId,
		});
		updateResultsDisplay(true);
	}

	return (
		<Container>
			<Row className="mb-3" style={{
				marginTop: '4vh',
				marginBottom: '8vh',
				textAlign: 'center'
			}}>
				<Col className='justify-content-center d-flex'>
					<h3 style={{ margin: '0 auto'}}>Polling Booth</h3>
				</Col>
				<br />
				<hr />
			</Row>
			
			<Row>
				<Col className='justify-content-center d-flex'>
					<Container>
						<Row style={{ marginTop: '4vh', backgroundColor: "#E3DEDD", borderRadius: '10px' }}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '2vw'
							}}>
								<img style={{ 
									height: '30vh',
									width: '15vw',
									borderRadius: '50%'
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
							}}>{ cand1Votes }</div>
						</Row>:null }
						<Row className='justify-content-center d-flex' style={{
							marginTop: '1vh',
							width: '10vw'
						}}>
							<Button disabled = { displayResults } onClick={ () => addVote(0) } style={{
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
						marginTop: '8vh',
						borderRadius: '10px'
					}}>{prompt}</div>
				</Col>

				<Col className='justify-content-center d-flex'>
					<Container>
						<Row style={{ marginTop: '4vh', backgroundColor: "#E3DEDD", borderRadius: '10px' }}>
							<div style={{
								display: 'flex',
								justifyContent: 'center',
								padding: '2vw',
							}}>
								<img style={{ 
									height: '30vh',
									width: '15vw',
									borderRadius: '50%'
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
							}}>{ cand2Votes }</div>
						</Row>:null }
						<Row className='justify-content-center d-flex' style={{
							marginTop: '1vh',
							width: '10vw',
							borderRadius: '10px'
						}}>
							<Button disabled = { displayResults } onClick={ () => addVote(1) } style={{
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

export default PollingBooth;