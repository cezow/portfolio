import React from 'react';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m67pxip', 'template_b9d09qe', form.current, {
            publicKey: '2pyKL-JS5Fm6kSFj6',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

    return ( 
        <section className='d-flex justify-content-center'>
            <div className='maindiv'>
                <h2 className='text-center'>Skontaktuj się ze mną</h2> <br/>
                <form ref={form} onSubmit={(e) => sendEmail(e)} className='emailform d-flex flex-col gap-3'>
                    <input  style={{color: 'darkcyan'}} type='text' placeholder=' Imię' name='user_name' required/>
                    <input style={{color: 'darkcyan'}} type='email' placeholder=' Email' name='user_email' required/>
                    <input  style={{color: 'darkcyan'}} type='text' placeholder=' Temat' name='subject' required/>
                    <textarea style={{color: 'darkcyan'}} name='message' cols='30' rows='10' placeholder=' Treść wiadomości...' required></textarea>
                    <Button type='submit' className='btn-warning'>Wyślij</Button>
                </form>

            </div>
        </section>
    );
}
 
export default Contact;