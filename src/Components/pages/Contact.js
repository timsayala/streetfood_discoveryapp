import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Contact.css';

const Contact = () => {
  return (
    
    <div className=''>
      <Navbar />
      <div className='container contact '>
        
        
      <h1 className='col-6'>GET IN TOUCH</h1>
      
      
      <p className='col-6'>If you have any questions, feedback, or just want to say hi, we'd love to hear from you! You can reach us at our official Facebook Page @stfooddevapp. We're always happy to chat about street food and how we can make the Streetfood Discovery experience even better for our users.</p>
      <br></br>
      <h3 className='col-6'> CHART TO US</h3>
      <p className='col-6'>Our friendly team is here to help.</p>
      <a className='col-6' href=''>streetfoodph@gmail.com</a>
      <h3 className='col-6'>OFFICE</h3>
      <p className='col-6'>Come say hello at our office</p>
      <p className='col-6'>121 Rock Street,21 Avenue</p>
      <h3 className='col-6'>PHONE</h3>
      <p className='col-6'>Mon-Fri from 8am to 5pm</p>
      <a className='col-6' href=''> +639613288009</a>
      </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      
      <Footer/>
    </div> 
     
  );

};

export default Contact;
