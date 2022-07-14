import React, {createContext, useContext, useState, useEffect} from "react";
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false)

    const [cartItems, setCartItems] = useState([]);

    const [totalPrice, setTotalPrice] = useState();
 
    let foundProduct;
    let index;
    
    
    const [totalQuantities, setTotalQuantities] = useState(0);
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
   
    
    const toggleCartItemQuanitity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id)
    
        if(value === 'inc') {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value === 'dec') {
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
          }
        }
      }


    
    const [qty, setQty] = useState(1);
    const [warn, setWarn] = useState("(You can add upto 8 qty per product)")
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
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            warn,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuanitity,
            // onRemove,
            setTotalPrice,
            setTotalQuantities
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)