import React from 'react';
import Product from '../Component/Product/Product.jsx';
import Banner from '../Component/Banner/Banner.jsx';
import Footer from '../Footer/Footer.jsx';

const Home = () => {
    return (
    
           <div className=" py-5 gap-4 mx-auto">
            <Banner></Banner>
            <Product></Product>
           </div>
        
    );
};

export default Home;