import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart?.reduce((sum, item) => item?.price + sum, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className='flex justify-between h- uppercase items-center font-medium'>
                <h1>Total Orders: {cart?.length}</h1>
                <h1>Total Orders: ${total}</h1>
                <button className="btn btn-warning btn-lg text-white">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                </td>
                                <td className='text-end'>${item.price}</td>
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

export default MyCart;