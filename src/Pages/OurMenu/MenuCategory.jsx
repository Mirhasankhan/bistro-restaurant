import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Shared/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className='my-8'>
            {
                title && <Cover image={coverImg} title={title} description={"would you like to try a dish?"}></Cover>
            }
            <div className='grid md:grid-cols-2 gap-6 mt-5'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/orders/${title}`}>
                <button className="uppercase rounded-md border-b-2 p-3 hover:bg-purple-400 hover:text-white mt-3">Order Your Favourite Food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;