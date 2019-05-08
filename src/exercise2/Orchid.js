import React from 'react';
import PropTypes from 'prop-types';

// Here's a URL to get you started

const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';

export default class Orchid extends React.Component {
    static propTypes = {
        borderColor: PropTypes.string.isRequired
    }

    render() {
        const style = {
            width: '100%',
            height: 'auto',
            borderWidth: '5px',
            borderStyle: 'solid',
            borderColor: this.props.borderColor
        };

        return (
            <img
                style={style}
                src={orchidImageUrl}
                alt="Image of an Orchid from Wikimedia"
            />
        );
    }
}