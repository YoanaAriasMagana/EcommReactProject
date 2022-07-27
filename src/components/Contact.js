import React from 'react';

class Contact extends React.Component{
    render() {

        return (
            <div className="contact-container">
            <div className="contact-form">
            <section className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" required="required"/>
            </section>
            <br />
            <section className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" required="required"/>
            </section>
            <br />
            <section className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" placeholder="xxx-xxx-xxxx" required="required"/>
            </section>
            <br />
            <section className="form-group">
              <label>Comments </label>
              <textarea
                name="Comments"
                placeholder="Leave comments here..."
                className="valid"
                defaultValue={""}
              />
            </section>
            <br />
            <input className="submit-btn" type="submit"/>
          </div>
          </div>
          
        );
    }
}

export default Contact;