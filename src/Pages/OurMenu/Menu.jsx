import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={menuImg} title={"Our Menu"} description={"would you like to try a dish?"}></Cover>
            {/* offered mennu */}
            <SectionTitle heading="Today's Offer" subHeading="Don't miss "></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImg}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;