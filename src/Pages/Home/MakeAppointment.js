import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center mt-44 '
            style={{
                background: `url(${appointment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[-150px] hidden lg:block md:block sm:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-4xl text-white pt-10'>Make an appointment Today</h2>
                <p className='text-white py-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;