import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now admin!!`,
                        showConfirmButton: false,
                        timer: 500
                    })
                }
            })
    }
    const handleDelete = () => {

    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div>
                <h3 className="text-3xl font-medium my-4">
                    Total Users: {users.length}
                </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? <span className='text-green-600 text-xl'>Admin</span> :
                                        <button onClick={() => handleMakeAdmin(user)} className="bg-orange-400 text-white btn btn-ghost btn-xl"><FaUserShield className='text-lg'></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="bg-red-400 text-white btn btn-ghost btn-xl"><FaTrashAlt className='text-xl'></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;