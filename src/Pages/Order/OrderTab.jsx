import React from 'react';
import FoodCard from '../../Components/FoodCard';

const OrderTab = ({ food }) => {
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            {
                food.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;