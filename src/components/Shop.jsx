import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utils/fakeDB';
import { CartContext, ProductContext } from '../App';
import { toast } from 'react-hot-toast';

const Shop = () => {
    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext)

    // Card button handler
    const handlerAddToCart = product => {


        let newCart = []
        const exists = cart.find(existingProduct => existingProduct.id === product.id)

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        toast.success('Product Added! 🛒')
       setCart(newCart)
        addToDb(product.id)
    }



    return (
        <div className='my-container'>
           <div className='product-container'>
           {products.map((product) => (
                <ProductCard
                    product={product}
                    key={product.id}
                    handlerAddToCart={handlerAddToCart}
                ></ProductCard>
            ))}
           </div>
        </div>
    );
};

export default Shop;