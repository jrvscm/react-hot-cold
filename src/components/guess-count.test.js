import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () =>{
	it('should render without crashing', () => {
		shallow(<GuessCount />);
	});

	it('should render the correct count', () => {
		const value = 10;
		const wrapper = shallow(<GuessCount guessCount={value} />);
		expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
	});
});