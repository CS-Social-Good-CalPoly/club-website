import React from 'react'
import '../../assets/SharedAssets/CallToAction.css'
import FilledButton from './FilledButton'

const CallToAction = ({ title, text, buttonUrl, buttonText }) => {
    return (
        <div className="call-to-action">
            <h2>{title}</h2>
            <div className="cta-text">
                <p>{text}</p>
            </div>
            <FilledButton url={buttonUrl} text={buttonText}/>
        </div>
    )
}

export default CallToAction
