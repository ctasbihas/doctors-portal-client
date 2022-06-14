import React from 'react';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <section style={{ background: `url(${background})` }} className='mb-20 py-20' >
            <div className='text-center'>
                <h4 className='text-xl font-bold text-secondary'>Contact Us</h4>
                <h2 className='text-4xl text-white '>Stay connected with us</h2>
            </div>
            <div className='flex flex-col w-[450px] mx-auto mt-10'>
                <input type="email" placeholder="Email Address" className="input input-bordered input-md w-full" />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full my-5" />
                <textarea type="text" placeholder="Your message" className="input input-bordered input-md w-full h-36 pt-2 resize-none" />
            </div>
            <div className='flex justify-center mt-5'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactForm;