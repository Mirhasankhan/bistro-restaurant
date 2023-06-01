import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [refetch] = useCart() 

    const handleAddToCart = item => { 
            
        if (user) {
            const orderItem = {
                foodID: _id,
                email: user.email,
                name,
                image
            }
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Added Into Cart',
                            showConfirmButton: false,
                            timer: 500
                        })
                    }
                })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You need log in first!',
               
              })
              navigate('/login', {state: {from: location}})
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 bg-slate-900 text-white mt-4 mr-4 px-4 rounded-md py-2'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="rounded-md border-b-4 border-orange-400 p-3 bg-slate-200 hover:bg-slate-600 hover:text-white mt-3">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;