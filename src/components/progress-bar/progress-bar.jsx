import React from 'react';
import './progress-bar.css';


export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let progressValue = this.props.progressValue;

        let progressValeStyle= {
            width: progressValue + '%'
        };

        return <div className={"progress-bar"}>
            <div className={"progress-bar__value"} style={progressValeStyle}>
            </div>
        </div>
    }
}

