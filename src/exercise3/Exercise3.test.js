import React from 'react';
import {shallow, render} from 'enzyme';
import Exercise3 from './Exercise3';
import InfoCard from './InfoCard';

describe('Exercise3', () => {
    const wrapper = shallow(<Exercise3 />);
    const infoCard = wrapper.find('InfoCard');

    it('should render an InfoCard', () => {
        expect(infoCard).toHaveLength(1);
    });

    it('should have children', () => {
        expect(infoCard.prop('children')).toBeDefined();
    })
});

describe('InfoCard', () => {
    it('should render children', () => {
        const infoCard = render(
            <InfoCard>
                <div className="test-child">test-child</div>
            </InfoCard>
        );
        expect(infoCard.find('.test-child')).toMatchSnapshot();
    });

    it('should render a FontAwesome icon', () => {
        const infoCard = shallow(<InfoCard></InfoCard>);

        expect(infoCard.find('FontAwesome')).toBeDefined();
    });
});
