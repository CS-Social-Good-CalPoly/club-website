import React from 'react'
import '../../assets/SharedAssets/CallToAction.css'
import FilledButton from './FilledButton'
import UnfillButton from './UnfillButton'

const CallToAction = ({ title, text, buttonUrl, buttonText, buttonStyle }) => {
    return (
        <div className="call-to-action">
            <h1>{title}</h1>
            <div className="cta-text">
                <p>{text}</p>
            </div>
            {buttonStyle === "filled" && <FilledButton url={buttonUrl} text={buttonText}/>}
            {buttonStyle === "unfilled" && <UnfillButton url={buttonUrl} text={buttonText}/>}
        </div>
    )
}

export default CallToAction
