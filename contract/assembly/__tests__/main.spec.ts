import { storage, Context, VM } from 'near-sdk-as'
import { addURL, getURL, addToPrompts, getAllPrompts, addCandPair, getCandPair, incrementVote, getVotes, storeVoter, didVote, clearPrompts } from '..'

describe('Voting', () => {
	it('should add and retrieve url', () => {
		addURL('manu', "test")
		storage.get<string>(Context.sender)
		expect(getURL('manu')).toBe('test', 'should return test')
	})

	it ('should add and retrieve prompts', () => {
		addToPrompts("nani mnoma?")
		const promptsArr = getAllPrompts();
		expect(promptsArr.length).toBe(1, "prompt should be added")
	})

	it ('should return the correct log message', () => {
		addToPrompts("nani mnoma?")
		expect(VM.logs()).toContainEqual('added to prompts array ...')
	})

	it ('should add and retrieve a candidate pair', () => {
		addCandPair('nani mnoma?', 'manu', 'vini')
		const candArr = getCandPair('nani mnoma?');
		expect(candArr.length).toBe(2, 'should have at least 1 candidate pair')
	})

	it ("should return a log message upon adding a candidate pair", () => {
		addCandPair('nani mnoma?', 'manu', 'vini')
		expect(VM.logs()).toContainEqual('candidate pair added ...')
	})

	it ('should increment votes', () => {
		incrementVote('nani mnoma?', 1)
		const voteArr = getVotes('nani mnoma?')
		expect(voteArr.length).toBeGreaterThan(1, 'should increment votes')
	})

	it ("should return a log message upon adding candidate's URL", () => {
		addURL('manu', 'test')
		expect(VM.logs()).toContainEqual('url added for manu')
	})

	it ('should store voter details', () => {
		storeVoter('nani mnoma?', 'voke')
		expect(didVote('nani mnoma?', 'voke')).toBe(true, 'should store voter details')
	})

	it ('should return log messages upon clearPrompts', () => {
		clearPrompts()
		expect(VM.logs()).toContainEqual('prompts array cleared ...')
	})
})