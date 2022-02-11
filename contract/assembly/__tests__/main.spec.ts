import { storage, Context } from 'near-sdk-as'
import { addURL, getURL, addToPrompts, getAllPrompts} from '..'

describe('Voting', () => {
	it('should add url', () => {
		addURL('manu', "test")
		storage.get<string>(Context.sender)
		expect(getURL('manu')).toBe('test', 'should return test')
	})

})