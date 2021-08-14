import React from 'react'
import '../../assets/SharedAssets/SubscriptionForm.css'

const SubscriptionForm = () => {
    return (
        <>
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
                <form action="https://facebook.us20.list-manage.com/subscribe/post?u=6f7a19cef943f4e5452f423c2&id=6c2fd95722" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <input 
                            type="email" 
                            Value 
                            name="EMAIL" 
                            className="mc-email" 
                            id="mce-EMAIL" 
                            placeholder="  Enter your email " required 
                        />
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: 'relative', left: '-50000px'}} aria-hidden="true">
                            <input 
                                type="text" 
                                name="b_6f7a19cef943f4e5452f423c2_6c2fd95722" 
                                tabIndex={-1} 
                                defaultValue 
                            />
                        </div>
                        <div className="clear">
                            <input 
                                type="submit" 
                                Value="Join our mailing list" 
                                name="subscribe" 
                                id="mc-embedded-subscribe" className="mc-button" 
                            />
                        </div>
                    </div>
                </form>
            </div>
            {/*End mc_embed_signup*/}
        </>
    )
}

export default SubscriptionForm; 
