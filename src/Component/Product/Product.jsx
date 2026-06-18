import React, { useEffect,useState } from 'react';
import ProductCard from '../ProductCard/productCard.jsx';

const Product = () => {

    const [products, setProducts] = useState();
    console.log(products)

    //fetch data from the server
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())    
            .then(data => {
                console.log('products from the server', data);
                setProducts(data);
            })
    }, [])



    return (
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5" >
            {/* <p>{products?.length} products found</p> */}
           {products?.map(product => <ProductCard key={product._id} setProducts={setProducts} product={product}></ProductCard>)}
        </div>
    );
};

export default Product;