import React from 'react'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container">
            <h1>Come in Contact with Us</h1>
            <form noValidate>
            {/* <form onSubmit="onSubmitContact(event)" noValidate> */}
                <div className="top-form">
                    <div className="input-holder">
                        <label htmlFor="user-name" id="userName-label" className="d-none">Name</label>
                        <input type="text" id="userName" placeholder="Your Name" required />
                        {/* <input type="text" id="userName" placeholder="Your Name" onKeyUp="validate(event)" required /> */}
                        <div id="userName-error" className="error-text"></div>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="user-email" id="userEmail-label" className="d-none">Email</label>
                        <input type="email" id="userEmail" className="" placeholder="Your Mail" required />
                        {/* <input type="email" id="userEmail" className=""  placeholder="Your Mail" onKeyUp="validate(event)" required /> */}
                        <div id="userEmail-error" className="error-text"></div>
                    </div>
                </div>
                <div className="bottom-form">
                    <div className="textarea-holder">
                        <label htmlFor="user-comment" id="userComment-label" className="d-none">Comment</label>
                        <textarea id="userComment" placeholder="Comment" required></textarea>
                        {/* <textarea id="userComment" placeholder="Comment" onKeyUp="validate(event)" required></textarea> */}
                        <div id="userComment-error" className="error-text"></div>
                    </div>
                    <div className="btn-no-corners">
                        <button className="btn-bg-theme" type="submit">Post Comment</button>
                        {/* <button className="btn-bg-theme" type="submit" onClick="onClick()">Post Comment</button> */}
                        <div id="successful-post"></div>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactForm