import React from 'react'
import '../../assets/WhatWeDo/BlueNewsletterSubBox.css'
import SubscriptionForm from '../SharedComponents/SubscriptionForm'

const WhatWeDoMailingList = () => {
    return (
        <div className="blue-newsletter">
            <div className="blue-news-container">
                <h2>Wanna stay in the loop?</h2>
                <h4>
                    <em>Get weekly club updates sent straight to your inbox.</em>
                </h4>
                <SubscriptionForm />
            </div>
        </div>
    )
}

export default WhatWeDoMailingList
