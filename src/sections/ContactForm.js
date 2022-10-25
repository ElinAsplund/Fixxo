import React, { useState } from 'react'

const ContactForm = () => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', comment: '', success: '' })
    const [formMessages, setFormMessages] = useState({})


    const handleChange = (e) => {
        const { id, value } = e.target
        setContactForm({ ...contactForm, [id]: value })
    }

    const handleKeyUp = () => {
        setFormMessages(testValidate())
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // To prevent sending an empty form when the user clicks the submit-button without entering any of the input-fields
        let firstCheck = testValidate()

        if(Object.values(formMessages).length === 0 && Object.values(firstCheck).length === 0){
            let message = {}
            message.success = "Thank you! Your comment has been successfully sent!"
            setFormMessages(message);
        }
    }

    const testValidate = () => {
        let messages = {}
        const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        // Validate NAME
        if (!contactForm.name)
            messages.name = "You must enter a name"
        else if (!regex_name.test(contactForm.name))
            messages.name = "Your name can only contain letters"
        else if (contactForm.name.length < 2)
            messages.name = "Your name must contain at least two letters"

        // Validate EMAIL
        if (!contactForm.email)
            messages.email = "You must enter an email"
        else if (!regex_email.test(contactForm.email))
            messages.email = "You must enter a valid email"

        // Validation COMMENT
        if (!contactForm.comment)
            messages.comment = "You must enter a comment"
        else if (contactForm.comment.length < 5)
            messages.comment = "Your comment must be longer than 5 characters"

        return messages;
    }


    return (
        <section className="contact-form">
            <div className="container">
                <h1>Come in Contact with Us</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="top-form">
                        <div className="input-holder">
                            <label htmlFor="name" id="name-label" className="d-none">Name</label>
                            <input type="text" id="name" placeholder="Your Name" value={contactForm.name} onChange={handleChange} onKeyUp={handleKeyUp} required />
                            <div id="name-error" className="error-text">{formMessages.name}</div>
                        </div>
                        <div className="input-holder">
                            <label htmlFor="email" id="email-label" className="d-none">Email</label>
                            <input type="email" id="email" className="" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} onKeyUp={handleKeyUp} required />
                            <div id="email-error" className="error-text">{formMessages.email}</div>
                        </div>
                    </div>
                    <div className="bottom-form">
                        <div className="textarea-holder">
                            <label htmlFor="comment" id="Comment-label" className="d-none">Comment</label>
                            <textarea id="comment" placeholder="Comment" value={contactForm.comment} onChange={handleChange} onKeyUp={handleKeyUp} required></textarea>
                            <div id="ucomment-error" className="error-text">{formMessages.comment}</div>
                        </div>
                        <div className="btn-no-corners">
                            <button className="btn-bg-theme" type="submit">Post Comment</button>
                            <div id="successful-post">{formMessages.success}</div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm


    // const [submitted, setSubmitted] = useState(false)

    // const validate = (values) => {
    //     const messages = {}

    //     // ---REGULAR EXPRESSION---
    //     // Checking if name has any numbers in it. ÅÄÖ do not work!
    //     // https://stackoverflow.com/questions/18650972/javascript-validation-for-non-empty-number-and-alphabets
    //     // With ÅÄÖ working:
    //     // https://stackoverflow.com/questions/36366125/include-special-characters-like-%C3%B6-%C3%A4-%C3%BC-in-regular-expressions
    //     const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;

    //     // Regular expression email x@x.xx
    //     const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     // Validation NAME
    //     if (!values.name)
    //         messages.name = "You must enter a name"
    //     else if (!regex_name.test(values.name))
    //         messages.name = "Your name can only contain letters"
    //     else if (values.name.length < 2)
    //         messages.name = "Your name must contain at least two letters"


    //     // Validation EMAIL
    //     if (!values.email)
    //         messages.email = "You must enter an email"
    //     else if (!regex_email.test(values.email))
    //         messages.email = "You must enter a valid email"

    //     // Validation COMMENT
    //     if (!values.comment)
    //         messages.comment = "You must enter a comment"
    //     else if (values.comment.length < 5)
    //         messages.comment = "Your comment must be longer then 5 characters"

    //     // Validation of the whole FORM 
    //     if (Object.keys(messages).length === 0) {
    //         setSubmitted(true)
    //         messages.success = "Thank you! Your comment has been successfully sent!"
    //     } else
    //         setSubmitted(false)

    //     return messages;
    // }