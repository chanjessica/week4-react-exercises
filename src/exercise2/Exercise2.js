import React from 'react';

export default class Exercise2 extends React.Component {
    render() {
        return (
            <div>
                <h2>Exercise 2</h2>
                <p>
                    In the <code>exercise2</code> folder, there is a file called <code>Orchid.js</code>.
                </p>
                <ol>
                    <li>Have <code>Orchid.js</code> render an image of an orchid (URL provided, don't forget the <code>alt</code> prop)</li>
                    <li>Add the prop <code>borderColor</code> to the <code>Orchid</code> component and give the image a border with the color provided.</li>
                    <li>Import and render the <code>Orchid</code> component in <code>Exercise2.js</code> and provide it a <code>borderColor</code></li>
                </ol>
            </div>
        )
    }
}