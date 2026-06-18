import React from 'react';

const productCard = ({ setProducts, product, products }) => {
    const { _id, name, description, price } = product || {};


    //handle delete product
    const handleDelete = (id) => {
        fetch(`http://localhost:3000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {

            console.log('Product deleted:', data);

            if (data.deletedCount > 0) {
                alert('Product deleted successfully');
                //reload the page after deleting the product
                window.location.reload();
                
                // Update the products state to remove the deleted product
                const remainingProducts = products.filter(product => product._id !== id);
                
                setProducts(remainingProducts);
               
            }
             
        });
    }

    //handle view product details
    const handleDetails = (id) => {
        fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log('Product details:', data);
                // Do something with the product details, e.g., display them in a modal
            });
    };

    return (
        <div className="card pt-4 bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p className="text-lg font-bold">${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDetails(_id)}  className="badge hover:bg-blue-500 badge-outline">View</button>
                    <button onClick={() => handleDelete(_id)} className="badge hover:bg-red-500 badge-outline">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default productCard;