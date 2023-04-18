import React, { useState, createContext } from "react";
import { IProducto } from "../interfaces/productos.interface";

type CarritoContextType = {
  cart: IProducto[];
  setCart: React.Dispatch<React.SetStateAction<IProducto[]>>;
  showCarrito: boolean;
  setShowCarrito: React.Dispatch<React.SetStateAction<boolean>>;
  gemas: number;
  setGemas: React.Dispatch<React.SetStateAction<number>>;
  selectedProducts: { [key: number]: boolean };
  setSelectedProducts: React.Dispatch<
    React.SetStateAction<{ [key: number]: boolean }>
  >;
};

export const CarritoContext = createContext<CarritoContextType>({
  cart: [],
  setCart: () => null,
  showCarrito: false,
  setShowCarrito: () => null,
  gemas: 3,
  setGemas: () => null,
  selectedProducts: {},
  setSelectedProducts: () => null,
});

export const CarritoProvider = ({ children }: any) => {
  const [cart, setCart] = useState<IProducto[]>([]);
  const [showCarrito, setShowCarrito] = useState(false);
  const [gemas, setGemas] = useState(3);
  const [selectedProducts, setSelectedProducts] = useState<{
    [key: number]: boolean;
  }>({});

  const contextValue = {
    cart,
    setCart,
    showCarrito,
    setShowCarrito,
    gemas,
    setGemas,
    selectedProducts,
    setSelectedProducts,
  };

  return (
    <CarritoContext.Provider value={contextValue}>
      {children}
    </CarritoContext.Provider>
  );
};
