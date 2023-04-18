import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { IProducto } from "../interfaces/productos.interface";
import axios from "axios";

export const CarritoComponent = () => {
  const {
    cart,
    setCart,
    setShowCarrito,
    gemas,
    setGemas,
    selectedProducts,
    setSelectedProducts,
  } = useContext(CarritoContext);

  const [buySuccess, setBuySuccess] = useState(false);

  const realizarCompra = async (ids: number[]) => {
    try {
      const response = await axios.post("http://localhost:3001/compras", {
        itemsId: ids,
      });
      console.log(response.data);
      setBuySuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = () => {
    if (cart.length) {
      realizarCompra(cart.map((item) => item.id));
      setGemas(3);
      setCart([]);
    }
  };

  const removeFromCart = (productToRemove: IProducto) => {
    const newCart = cart.filter((product) => product.id !== productToRemove.id);
    setCart(newCart);
    const updatedGems = gemas + productToRemove.precio;
    const { [productToRemove.id]: _, ...remaining } = selectedProducts;
    setSelectedProducts({ [productToRemove.id]: false, ...remaining });
    setGemas(updatedGems);
  };

  return (
    <div>
      <button
        className="bg-purple-500 text-white px-2 py-1 rounded-xl hover:scale-105"
        onClick={() => setShowCarrito(false)}
      >
        Volver
      </button>
      <div className="my-4">
        {!buySuccess ? (
          <div>
            {cart.length ? (
              cart.map((product) => (
                <ul key={product.id} className="bg-gray-800 text-white">
                  <li className="flex items-center py-2 px-4 border-b border-white">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 bg-gray-600 flex items-center justify-center">
                      <img src={product.imagen} alt="Nombre del producto" />
                    </div>
                    <span className="flex-1 text-center">{product.nombre}</span>
                    <button
                      onClick={() => removeFromCart(product)}
                      className="ml-auto"
                    >
                      <svg
                        className="w-6 h-6 fill-current text-gray-500"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.707 6.707a1 1 0 011.414 0L10 8.586l1.879-1.879a1 1 0 111.414 1.414L11.414 10l1.879 1.879a1 1 0 11-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 01-1.414-1.414L8.586 10 6.707 8.121a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              ))
            ) : (
              <p>No hay productos en el carrito!</p>
            )}
          </div>
        ) : (
          <span>Compra Realizada!</span>
        )}
        <button
          onClick={handleBuy}
          className={`w-full ${
            !buySuccess ? "bg-purple-500" : "bg-gray-600"
          } text-white px-2 py-2 rounded-xl mt-4`}
          disabled={buySuccess}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
