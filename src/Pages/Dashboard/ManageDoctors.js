import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', { headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` } }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className="text-2xl my-3">Manage Doctor: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <div className="overflow-x-auto">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>

                                        </th>
                                        <th>Name</th>
                                        <th>Specialty</th>
                                        <th>Action</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        doctors.map((doctor, index) => <DoctorRow
                                            key={doctor._id}
                                            doctor={doctor}
                                            index={index}
                                            refetch={refetch}
                                        />)
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctors;