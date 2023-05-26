import React from 'react';

const FoodCard = ({ item }) => {
    const { image, price, recipe, name } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 bg-slate-900 text-white mt-4 mr-4 px-4 rounded-md py-2'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="rounded-md border-b-4 border-orange-400 p-3 bg-slate-200 hover:bg-slate-600 hover:text-white mt-3">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;