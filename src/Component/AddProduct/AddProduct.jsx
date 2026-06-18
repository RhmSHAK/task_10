import React from 'react';

const AddProduct = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productDescription = form.productDescription.value;
        const productPrice = form.productPrice.value;

        const productObject = {
            name: productName,
            description: productDescription,
            price: productPrice
        };

        console.log(productObject);

        //sent data to the server
        fetch('https://office-task-dusky.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productObject)
        })
         .then(res => res.json())
        .then(data=>{
            console.log('after saving product',data)

            if(data.insertedId){

                alert('product added successfully')
                e.target.reset();

            }
        })

    }


    return (
       <div className="flex justify-center items-center h-screen">
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleFormSubmit} className="fieldset">
                    <label className="label">Product Name</label>
                    <input type="text" name="productName" className="input" placeholder="Product Name" />
                    <label className="label">Product Description</label>
                    <input type="text" name="productDescription" className="input" placeholder="Product Description" />
                    <label className="label">Product Price</label>
                    <input type="number" name="productPrice" className="input" placeholder="Product Price" />

                        <button type="submit" className="btn btn-neutral mt-4">Add Product</button>
                </form>
            </div>
        </div>
       </div>
    );
};

export default AddProduct;