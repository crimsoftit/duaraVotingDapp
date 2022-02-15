import { Context, logging, PersistentMap } from 'near-sdk-as'

const candidateUrl = new PersistentMap<string, string>("Candidate's Url");
const candidatePair = new PersistentMap<string, string[]>('pair of candidates');
const prompts = new PersistentMap<string, string[]>('prompts');
const votes = new PersistentMap<string, i32[]>('stored votes');
const voterParticipation = new PersistentMap<string, string[]>('voter participation record');

// view methods
export function getURL(name:string):string {
	if (candidateUrl.contains(name)) {
		return candidateUrl.getSome(name)
	} else {
		logging.log('user not found')
		return ''
	}
}

export function getAllPrompts():string[] {
	if (prompts.contains('allArrays')) {
		return prompts.getSome('allArrays')
	} else {
		logging.log("0 prompts found")
		return []
	}
}

export function didVote (prompt:string, voter:string):bool {
	if (voterParticipation.contains(prompt)) {
		let getArray = voterParticipation.getSome(prompt);
		return getArray.includes(voter)
	} else {
		logging.log("did not find prompt ...")
		return false
	}
}

export function getVotes (prompt:string):i32[] {
	if (votes.contains(prompt)) {
		return votes.getSome(prompt)
	} else {
		logging.log("0 prompts found for this vote")
		return[0,0]
	}
}

export function getCandPair (prompt:string):string[] {
	if (candidatePair.contains(prompt)) {
		return candidatePair.getSome(prompt)
	} else {
		logging.log("didn't find any prompts ...")
		return []
	}
}


// change methods
export function addURL(name: string, url:string):void {
	candidateUrl.set(name, url);
	logging.log("url added for " + name);
}

export function addCandPair (prompt:string, cand1:string, cand2:string):void {
	candidatePair.set(prompt, [cand1, cand2])
}

export function incrementVote (prompt:string, index:i32):void {
	if (votes.contains(prompt)) {
		let tempArray = votes.getSome(prompt)
		let tempValue = tempArray[index];
		let newValue = tempValue + 1;
		tempArray[index] = newValue;
		votes.set(prompt, tempArray)
	} else {
		let newVotesArray = [0,0];
		newVotesArray[index] = 1;
		votes.set(prompt, newVotesArray);
	}
}

export function addToPrompts (prompt: string):void {
	if (prompts.contains('allArrays')) {
		logging.log("addition to prompts")
		let tempArray = prompts.getSome('allArrays')
		tempArray.push(prompt)
		prompts.set("allArrays", tempArray);
	} else {
		prompts.set('allArrays', [prompt])
	}
	logging.log('added to prompts array')
}

export function clearPrompts():void {
	prompts.delete('allArrays')
	logging.log('prompts array cleared ...')
}

export function storeVoter (prompt:string, voter:string):void {
	if (voterParticipation.contains(prompt)) {
		let tempArray = voterParticipation.getSome(prompt)
		tempArray.push(voter)
		voterParticipation.set(prompt, tempArray)
	} else {
		voterParticipation.set(prompt, [voter])
	}
}