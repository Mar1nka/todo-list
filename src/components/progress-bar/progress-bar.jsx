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

        let progressBarClass = 'progress-bar';

        if(this.props.isEditTaskEnabled) {
            progressBarClass += ' ' + 'progress-bar--not-display';
        }

        return <div className={progressBarClass}>
            <div className={"progress-bar__value"} style={progressValeStyle}>
            </div>
        </div>
    }
}

