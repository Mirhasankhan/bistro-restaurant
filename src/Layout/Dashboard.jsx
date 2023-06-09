import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()    
    const [isAdmin] = useAdmin()
   
 
    return (
        <div className="drawer drawer-mobile">
            {/*  flex flex-col items-center justify-center */}
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>  <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet></FaWallet>Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers></FaUsers> All Users
                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink></li>
                           </> :

                            <>  <li><NavLink to="/dashboard/home"><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet>Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/myCart">
                                    <FaShoppingCart></FaShoppingCart>MY CART
                                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                </NavLink></li></>
                    }
                    <div className="divider"></div>
                    <li><NavLink><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/dashboard/menu">Menu</NavLink></li>
                    <li><NavLink to="/dashboard/shop">Shop</NavLink></li>
                    <li><NavLink to="/dashboard/contact">Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;