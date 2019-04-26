import React from 'react';
import {shallow} from 'enzyme';
import PropTypes from 'prop-types';
import Exercise2 from './Exercise2';
import Orchid from './Orchid';

describe('Exercise2', () => {
    const wrapper = shallow(<Exercise2 />);
    const orchid = wrapper.find('Orchid');

    it('should render an orchid', () => {
        expect(orchid).toHaveLength(1);
    });

    it('should have a borderColor prop', () => {
        expect(orchid.prop('borderColor')).toBeDefined();
    })
});

describe('Orchid', () => {
    it('should have the correct propTypes', () => {
        expect(Orchid.propTypes.borderColor).toEqual(PropTypes.string);
    });

    it('should render an image with src and alt props', () => {
        const orchid = shallow(<Orchid borderColor="red" />);
        const img = orchid.find('img');

        expect(img.prop('src')).toBeDefined();
        expect(img.prop('alt')).toBeDefined();
    });
});
