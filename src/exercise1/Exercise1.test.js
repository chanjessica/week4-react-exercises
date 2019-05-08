import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from './Exercise1';
import CoffeeCard from './CoffeeCard';

describe('Exercise1', () => {
    const wrapper = shallow(<Exercise1 />);
    const coffeeCards = wrapper.find('CoffeeCard');

    it('renders and matches snapshot', () => {
        const coffeeCard = shallow(
            <CoffeeCard
                drinkName="latte"
                price={4.00}
            />
        );
        expect(coffeeCard).toMatchSnapshot();
    });

    it('should render four CoffeeCard components', () => {
        expect(coffeeCards).toHaveLength(4);
    });

    it('should have a CoffeeCard with each drink name', () => {
        const drinkNames = coffeeCards
            .map(card => card.prop('drinkName'))
            .sort();

        expect(drinkNames).toEqual(['americano', 'espresso', 'latte', 'mocha'])
    });
});