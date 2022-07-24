import React from 'react';

class Contact extends React.Component{
    render() {
        return (
            <div class="contact-form">
            <section class="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Name"/>
            </section>
            <br />
            <section class="form-group">
                <label>Email</label>
                <input type="text" name="email" placeholder="Email"/>
            </section>
            <br />
            <section class="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phoneNumber" placeholder="xxx-xxx-xxxx"/>
            </section>
            <br />
            <section class="form-group">
                <label>Comments </label>
                <textarea name="Comments" placeholder="Leave comments here..." class="valid"></textarea>
            </section>
            <br />
            <input class="button" type="Submit" value="Submit"/>
         
            </div>
        );
    }
}

export default Contact;