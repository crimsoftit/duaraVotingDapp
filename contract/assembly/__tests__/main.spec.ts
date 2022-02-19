import { storage, Context } from 'near-sdk-as'
import { addURL, getURL, addToPrompts, getAllPrompts, addCandPair, getCandPair, incrementVote, getVotes } from '..'

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

	it ('should add and retrieve a candidate pair', () => {
		addCandPair('nani mnoma?', 'manu', 'vini')
		const candArr = getCandPair('nani mnoma?');
		expect(candArr.length).toBe(2, 'should have at least 1 candidate pair')
	})

	it ('should increment votes', () => {
		incrementVote('nani mnoma?', 1)
		const voteArr = getVotes('nani mnoma?')
		expect(voteArr.length).toBeGreaterThan(1, 'should increment votes')
	})
})