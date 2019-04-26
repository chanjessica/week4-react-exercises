import React from 'react';

export default class Exercise3 extends React.Component {
    render() {
        return (
            <div>
                <h2>Exercise 3</h2>
                <p>
                    In React, components have a prop called <code>children</code> that allows you to access the content passed to an element. For example, in this component:
                </p>

                    <pre>
                        <code>
                        {'<InfoCard>\n    <div>Some custom content</div>\n</InfoCard>'}
                        </code>
                    </pre>

                <p>
                    We would be able to access <code>{'<div>Some custom content</div>'}</code> in <code>MyComponent</code> via <code>this.props.children</code>.
                    <br />No need to define it in <code>propTypes</code> or define it explicitly, it's there for you!
                </p>
                <ol>
                    <li>In the file <code>InfoCard.js</code>, create a component that renders an info icon. You can use <a href="https://fontawesome.com/icons?d=gallery&q=info" target="_blank" rel="noopener noreferrer">FontAwesome icons</a> and set them up with React using <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/react" target="_blank" rel="noopener noreferrer">these instructions.</a> Replace <code>faStroopwafel</code> with the name of the icon you want to import (e.g. <code>faInfoCircle</code>).
                    </li>
                    <li>Make the component generic, where you can pass in whatever you want to the card (see code block above for an example).</li>
                    <li>When passing <code>children</code> into the component, the component should display the info icon next to the children.</li>
                    <li>Import and render the <code>InfoCard</code> in <code>Exercise3.js</code></li>
                </ol>
            </div>
        )
    }
}