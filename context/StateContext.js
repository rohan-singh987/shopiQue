import React, {createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)

    const [cartItems, setCartItems] = useState([]);

    const [totalPrice, setTotalPrice] = useState();
 
    
    
    const [totalQuantities, setTotalQuantities] = useState();
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuant) => prevTotalQuant +  quantity);
        if(checkProductInCart)
        {

            const updatedCartItems = cartItems.map((cartProduct) => 
            {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updatedCartItems);
        }
        else{
            product.quantity = quantity;
            
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`);

    }
    
    
    const [warn, setWarn] = useState("(You can add upto 8 qty per product)")
    const [qty, setQty] = useState(1);
        const incQty = () => {
            setQty((prevQty) =>{
                if(prevQty+1 > 8)
            {
                setWarn("This is the Limit")
                toast.error("You are out of limit")
                return 8;
            }
                return prevQty+1
            })
        }
        
        const decQty = () => {
            setQty((prevQty) => {
                if(prevQty - 1 < 1)
                {
                    return 1;
                }

                setWarn("(You can add upto 8 qty per product)")
                return prevQty - 1;       
            })
        }


    return (
        <Context.Provider
        value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            warn,
            incQty,
            decQty,
            onAdd,
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)