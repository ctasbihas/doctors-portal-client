import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';import auth from '../../firebase.init';
;

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user]);
    return (
        <div>
            <h1 className="text-2xl my-5">My appointments: {appointments.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-sm'>Name</th>
                            <th className='text-sm'>Treatment</th>
                            <th className='text-sm'>Date</th>
                            <th className='text-sm'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <tr>
                                <th>{ ++index}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;