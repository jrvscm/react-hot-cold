import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
	it('should render without crashing', () => {
		shallow(<TopNav />);
	});

	it('should fire onNewGame when new game btn clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onRestartGame={callback} />);
			const link = wrapper.find('.new');
			link.simulate('click', {
				preventDefault() {}
			});
			expect(callback).toHaveBeenCalled();
	});

	it('should fire onGenerateAuralUpdate when hear state of game is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
			const link = wrapper.find('.visuallyhidden');
			link.simulate('click', {
				preventDefault() {}
			});
			expect(callback).toHaveBeenCalled();
	});
});