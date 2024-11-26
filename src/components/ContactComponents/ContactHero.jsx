import React from 'react'
import ContactHead from './ContactHeader'
import Contact from '../../assets/contact.png'

const ContactHero = () => {
  const contact = Contact
  return (
    
      <header className="relative bg-cover bg-center h-[50vh] lg:h-[70vh] md:block" style={{ backgroundImage:`url(${contact})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     <ContactHead />
     

      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl lg:text-6xl font-bold tracking-wide">CONTACT US</h1>
      </div>
    </header>
  );
};


export default ContactHero
