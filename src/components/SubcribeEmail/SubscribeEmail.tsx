import React, {FC} from 'react'
type SubscribeEmailProps={

}
const SubscribeEmail: FC<SubscribeEmailProps> = () => {
    return (
        <div className="container">
            <div className="col-12">
                <div className="subscribe-email">
                    <p className="subscribe-email_title">Join to our Newsletter</p>
                    <form className="subscribe-email_form">
                        <input className="subscribe-email_input" type="text" placeholder="Enter your e-mail"/>
                        <button type="submit" className="subscribe-email_button">Subscribe!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeEmail
