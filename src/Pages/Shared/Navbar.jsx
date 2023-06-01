import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire('Logout successfull')
            })
            .catch(() => { })
    }
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/orders/salad">Order Food</Link></li>
        <li>
            <Link to="/">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ? <><button onClick={handleLogout}>Logout</button></> : <> <li><Link to="/login">Login</Link></li></>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <div className='text-white'>
                    <h1 className="btn btn-ghost normal-case text-xl font-bold">BISTRO BOSS</h1>
                    <p className="normal-case italic pl-4 font-medium">R E S T A U R A N T</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;