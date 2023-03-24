import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Contact.css';

const Contact = () => {
  return (
    
    <div className=''>
      <Navbar />
      <div className='container contact '>
        
        

      <div className='row'> 

      <div className='col-6 text-center'>
      <h3>GET IN TOUCH</h3>
      
      
      <p>If you have any questions, feedback, or just want to say hi, we'd love to hear from you! You can reach us at our official Facebook Page @stfooddevapp. We're always happy to chat about street food and how we can make the Streetfood Discovery experience even better for our users.</p>
      <br></br>
      <h3> CHART TO US</h3>
      <p>Our friendly team is here to help.</p>
      <a>streetfoodph@gmail.com</a>
      <h3>OFFICE</h3>
      <p>Come say hello at our office</p>
      <p>121 Rock Street,21 Avenue</p>
      <h3>PHONE</h3>
      <p>Mon-Fri from 8am to 5pm</p>
      <a> +639613288009</a>
      </div>

      <div className='col-6'>
        <img  className="mx-auto d-block" src='../Images/cu.png' style={{width:
        "330px", height: "600px" }}></img>
      </div>
      
      </div>
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
