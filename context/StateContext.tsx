"use client";

import { Slug } from "@/sanity.types";
import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export type Games = {
  _id: string;
  _type: "games";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  poster?: {
    asset?: {
      _ref: string;
      _type: "reference";
    };
    _type: "image";
  };
  name?: string;
  slug?: Slug;
  price?: number;
  details?: string;
  quantity?: number;
};

const Context = createContext<any>(null);

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [toggleCart, setToggleCart] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);
  const [cartItems, setCartItems] = useState<Games[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const savedCartItems =
      JSON.parse(localStorage.getItem("cartItems") || "[]") || [];
    const savedTotalPrice =
      JSON.parse(localStorage.getItem("totalPrice") || "0") || 0;
    const savedTotalQuantities =
      JSON.parse(localStorage.getItem("totalQuantities") || "0") || 0;

    setCartItems(savedCartItems);
    setTotalPrice(savedTotalPrice);
    setTotalQuantities(savedTotalQuantities);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
    }
  }, [cartItems, totalPrice, totalQuantities, isInitialized]);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onAdd = (game: Games, quantity: number) => {
    const checkGameInCart = cartItems.find((item) => item._id === game._id);

    setTotalPrice((prevTotalPrice) => {
      const totalPrice = prevTotalPrice + (game.price || 0) * quantity;
      return Number(totalPrice.toFixed(2));
    });

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkGameInCart) {
      const updatedCartItems = cartItems.map((cartGame) => {
        if (cartGame._id === game._id)
          return {
            ...cartGame,
            quantity: cartGame.quantity! + quantity,
          };
        return cartGame;
      });

      setCartItems(updatedCartItems);
    } else {
      game.quantity = quantity;
      setCartItems([...cartItems, { ...game }]);
    }
    toast.success(() => {
      return (
        <div>
          <p className="text-md">Game Added Successfully</p>
          <p>
            <strong>({quantity})</strong>
            <span>
              <strong>{game.name}</strong>
            </span>
          </p>
        </div>
      );
    });
  };

  const onRemove = (game: Games) => {
    const foundGame = cartItems.find((item) => item._id === game._id);
    if (!foundGame) return;

    const newCartItems = cartItems.filter((item) => item._id !== game._id);

    setTotalPrice((prevTotalPrice) => {
      const totalPrice =
        prevTotalPrice - (foundGame.price || 0) * foundGame.quantity!;
      return Number(totalPrice.toFixed(2));
    });

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundGame.quantity!
    );
    setCartItems(newCartItems);
  };

  return (
    <Context
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
    </Context>
  );
};

export const useStateContext = () => useContext(Context);
