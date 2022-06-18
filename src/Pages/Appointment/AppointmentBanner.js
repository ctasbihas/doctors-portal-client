import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero my-28">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                 <img src={chair} className="w-[590px] h-[350px] rounded-lg shadow-2xl" />
                <div className='w-[310px] h-[330px]'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;