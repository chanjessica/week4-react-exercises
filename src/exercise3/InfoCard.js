import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faInfoCircle);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class InfoCard extends React.Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon color="#1b447c" icon="info-circle" />
                {this.props.children}
            </div>
        );
    }
}
