// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';
import Footer from './Footer';
import './App.css';


const App = () => {
  return (
    
    <div>
      
      <Navbar />
      
      <main>
     

        <section className="welcome-section">
          <div className="welcome-container">
            <h1 className="welcome-title">Welcome to my blog</h1>
            <p className="welcome-text">Showcasing my passion for web development</p>
          </div>
        </section>

        <section>
          <div className='project-container-top'>
        <h2>Recent Projects</h2>
          <div className="project-container">
          
            <div className="project-card">
              {/* <h3>Project 1</h3>
              <p>Feature 1 of Project 1</p> */}
              <h1>Car insurance Website</h1>
              <p>User Registration and Login:</p>
<ul>
  <li>Secure user registration and login system for customers.</li>
  <li>Enhanced security with encrypted passwords.</li>
  <li>Validation checks to ensure data integrity.</li>
</ul>

<p>Admin Panel and Authentication:</p>
<ul>
  <li>Separate login/signup for administrators in the admin panel.</li>
  <li>Restricted access to sensitive features and data for authorized admins.</li>
</ul>

<p>Quote Processing:</p>
<ul>
  <li>Seamless process for customers to request insurance quotes.</li>
  <li>Real-time calculations for insurance premiums based on user input.</li>
  <li>Clear and user-friendly presentation of quotes.</li>
</ul>

<p>Database Management with MongoDB:</p>
<ul>
  <li>Efficiently storing and retrieving data using MongoDB.</li>
  <li>Utilizing NoSQL database for flexibility and scalability.</li>
</ul>

<p>PHP Mailer:</p>
<ul>
  <li>Implemented PHP Mailer for forget password and recovery emails.</li>
  <li>Automated email notifications for password reset and account recovery.</li>
</ul>

<p>Google Maps API Integration:</p>
<ul>
  <li>Integrated Google Maps API for location-based services.</li>
  <li>Show nearby service centers or insurance agents based on user location.</li>
</ul>

<p>Payment Gateways:</p>
<ul>
  <li>Smooth and secure integration of payment gateways for premium payments.</li>
  <li>Multiple payment options for customer convenience.</li>
</ul>

<p>Responsive Web Design:</p>
<ul>
  <li>Fully responsive design for a seamless user experience on all devices.</li>
  <li>Mobile-friendly layout for easy access on smartphones and tablets.</li>
</ul>

<p>Security Measures:</p>
<ul>
  <li>Implemented security measures to protect user data and prevent unauthorized access.</li>
  <li>Ensured data transmission is secure with SSL encryption.</li>
</ul>

<p>Error Handling and Validation:</p>
<ul>
  <li>Comprehensive error handling and data validation for enhanced user experience.</li>
  <li>Minimized errors through thorough validation checks.</li>
</ul>

<p>Performance Optimization:</p>
<ul>
  <li>Website optimization for faster loading times and improved performance.</li>
  <li>Reduced loading times to engage users more effectively.</li>
</ul>

<p>User Experience (UX) Design:</p>
<ul>
  <li>Created an intuitive and user-friendly interface for easy navigation.</li>
  <li>Considered user experience in every aspect of the website design.</li>
</ul>

            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Feature 1 of Project 2</p>
            </div>
            {/* Add more project cards here */}
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
   
  );
};

export default App;
