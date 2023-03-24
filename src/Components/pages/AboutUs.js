import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './AboutUs.css';


const AboutUs = () => {
  return (
    
    <div>
      <Navbar style={{backgroundColor: '#f0f0f0'}}/>
      <div className='container-fluid text-center'>
        <div className='row d-flex align-items-center ' style={{backgroundColor: '#dfc8a5'}} >
      <h3 className='col'>Discover the Best Streetfood in Your City!
      <p >Are you a foodie looking to explore the vibrant world of streetfood? Or maybe you're just tired of the same old restaurant options and want to try something new and exciting. Either way, you've come to the right place!</p></h3>
      <div className='col'>
        <img className='png' src='../Images/1.png' alt=''></img>
      </div>
    </div>
      <div className='row d-flex align-items-center'>
      <div className='col'>
        <img className='png' src='../Images/2.png' alt=''></img>
      </div>
       <h3 className='col'>Our Story
      <p >Our story began with a passion for street food. Our founder, John, was traveling abroad when he discovered the delicious and diverse world of street food. When he returned home, he realized that there was a lack of access to authentic and quality street food in his own city. That's when he decided to start Streetfood Discovery, a platform that connects foodies with the best street food vendors in town.</p></h3>
      
      </div>
      <div className='row d-flex align-items-center '  style={{backgroundColor: '#dfc8a5'}}>
       <h3 className='col'>Our Mission
      <p >Our mission is to bring the taste and experience of street food to as many people as possible. We believe that everyone should have access to delicious and authentic street food, regardless of where they live. That's why we work hard to identify and promote the best street food vendors, and to make it easy for our users to discover and enjoy their offerings.</p></h3>
      
      <div className='col'>
        <img className='png' src='../Images/3.png' alt=''></img>
      </div>
      </div>
      <div className='row d-flex align-items-center'>
      <div className='col'>
        <img className='png' src='../Images/4.png' alt=''></img>
      </div>
      
       <h3 className='col'>Our Values
      <p >At Streetfood Discovery, we value authenticity, quality, and community. We believe that street food is not just about the food itself, but also about the culture and community that surrounds it. That's why we strive to promote and support street food vendors who share these values, and to create a community of foodies who are passionate about street food.</p></h3>
      
      </div>
      <div className='row d-flex align-items-center' style={{backgroundColor: '#dfc8a5'}}>
       <h3 className='col'>Our Team
      <p >Our team is made up of dedicated foodies who are passionate about street food. From our developers to our customer service representatives, we all share a love for discovering and promoting the best street food around. We work hard to ensure that our platform is easy to use and that our users have a great experience discovering and enjoying street food.</p></h3>
      
      <div className='col'>
        <img className='png' src='../Images/5.png' alt=''></img>
      </div>
      </div>
      <div className='row d-flex align-items-center'>
      
      
      <div className='col'>
        <img className='png' src='../Images/6.png' alt=''></img>
      </div>
      <h3 className='col'>Contact Us
      <p >If you have any questions, feedback, or just want to say hi, we'd love to hear from you! You can reach us at our official Facebook Page @stfooddevapp. We're always happy to chat about street food and how we can make the Streetfood Discovery experience even better for our users.</p></h3>
      </div>
      </div>
      <Footer />
    </div> 
    
  );
 
};



export default AboutUs;
