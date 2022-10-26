import React, { useState } from 'react'

const ContactForm = () => {
    // const [formMessages, setFormMessages] = useState({})
    // const [submitted, setSubmitted] = useState(false)
    const [contactForm, setContactForm] = useState({ name: '', email: '', comment: '', success: '' })
    const [errorName, setErrorName] = useState({name: ''})
    const [errorEmail, setErrorEmail] = useState({email: ''})
    const [errorComment, setErrorComment] = useState({comment: ''})
    const [submitMessage, setSubmitMessage] = useState({submit: ''})
    
    const handleChange = (e) => {
        const { id, value } = e.target
        setContactForm({ ...contactForm, [id]: value })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()

        let nameOK = validateName()
        let emailOK = validateEmail()
        let commentOK = validateComment()
        let allOK = false
        let message = {}

        if (nameOK && emailOK && commentOK)
            allOK = true
        else
            allOK = false
            
        if (allOK===true){
            console.log("message SENT")
            message.submit = "Thank you! Your comment has been successfully sent!"
            setSubmitMessage(message)
        }else{
            console.log("message NOT SENT")
            message.submit = "Please fill out the form completely!"
            setSubmitMessage(message)
        }
    }


    // Validate NAME
    const validateName = () =>{
        let error = {}
        const regex_name = /^[a-zA-Z\u0080-\uFFFF]*$/;

        if (!contactForm.name)
            error.name = "You must enter a name"
        else if (!regex_name.test(contactForm.name))
            error.name = "Your name can only contain letters"
        else if (contactForm.name.length < 2)
            error.name = "Your name must contain at least two letters"
    
        setErrorName(error)

        return Object.keys(error).length === 0 ? true : false;
    }

    // Validate EMAIL
    const validateEmail = () =>{
        let error = {}
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!contactForm.email)
            error.email = "You must enter an email"
        else if (!regex_email.test(contactForm.email))
            error.email = "You must enter a valid email"
    
        setErrorEmail(error)
        
        return Object.keys(error).length === 0 ? true : false;
    }

    // Validate COMMENT
    const validateComment = () =>{
        let error = {}

        if (!contactForm.comment)
            error.comment = "You must enter a comment"
        else if (contactForm.comment.length < 5)
            error.comment = "Your comment must be longer than 5 characters"
    
        setErrorComment(error)

        // error === {} ? true : false;
        return Object.keys(error).length === 0 ? true : false;
    }

    return (
        <section className="contact-form">
            <div className="container">
                <h1>Come in Contact with Us</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="top-form">
                        <div className="input-holder">
                            <label htmlFor="name" id="name-label" className="d-none">Name</label>
                            <input type="text" id="name" placeholder="Your Name" value={contactForm.name} onChange={handleChange} onKeyUp={validateName} required />
                            <div id="name-error" className="error-text">{errorName.name}</div>
                        </div>
                        <div className="input-holder">
                            <label htmlFor="email" id="email-label" className="d-none">Email</label>
                            <input type="email" id="email" className="" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} onKeyUp={validateEmail} required />
                            <div id="email-error" className="error-text">{errorEmail.email}</div>
                        </div>
                    </div>
                    <div className="bottom-form">
                        <div className="textarea-holder">
                            <label htmlFor="comment" id="Comment-label" className="d-none">Comment</label>
                            <textarea id="comment" placeholder="Comment" value={contactForm.comment} onChange={handleChange} onKeyUp={validateComment} required></textarea>
                            <div id="ucomment-error" className="error-text">{errorComment.comment}</div>
                        </div>
                        <div className="btn-no-corners">
                            <button className="btn-bg-theme" type="submit">Post Comment</button>
                            <div id="successful-post">{submitMessage.submit}</div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm