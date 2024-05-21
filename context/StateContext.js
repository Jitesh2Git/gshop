"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CustomToast = ({ quantity, game }) => (
  <div>
    <p className="text-md">Game Added Successfully</p>
    <p>
      <strong>({quantity})</strong>{" "}
      <span>
        <strong>{game.name}</strong>
      </span>
    </p>
  </div>
);

const Context = createContext();

export const StateContext = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  const onAdd = (game, quantity) => {
    const checkGameInCart = cartItems.find((item) => item._id === game._id);

    setTotalPrice((prevTotalPrice) => {
      const totalPrice = prevTotalPrice + game.price * quantity;
      return Number(totalPrice.toFixed(2));
    });

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkGameInCart) {
      const updatedCartItems = cartItems.map((cartGame) => {
        if (cartGame._id === game._id)
          return {
            ...cartGame,
            quantity: cartGame.quantity + quantity,
          };
        return cartGame;
      });

      setCartItems(updatedCartItems);
    } else {
      game.quantity = quantity;

      setCartItems([...cartItems, { ...game }]);
    }

    toast.success(<CustomToast quantity={quantity} game={game} />);
  };

  const onRemove = (game) => {
    const foundGame = cartItems.find((item) => item._id === game._id);
    if (!foundGame) return;

    const newCartItems = cartItems.filter((item) => item._id !== game._id);

    setTotalPrice((prevTotalPrice) => {
      const totalPrice = prevTotalPrice - foundGame.price * foundGame.quantity;
      return Number(totalPrice.toFixed(2));
    });

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundGame.quantity
    );
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        toggleCart,
        setToggleCart,
        toggleMenu,
        setToggleMenu,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
