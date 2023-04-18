import { useContext } from "react";
import { IProducto } from "../interfaces/productos.interface";
import { CarritoContext } from "../context/CarritoContext";

export const TarjetaProductoComponent = ({ ...producto }: IProducto) => {
  const { nombre, precio, descripcion, imagen } = producto;
  const { cart, setCart, gemas, setGemas } = useContext(CarritoContext);

  const addToCart = (selectedProduct: IProducto) => {
    setCart([...cart, selectedProduct]);
    setGemas(gemas - selectedProduct.precio);
  };

  const isSelected = cart.some((product) => product.id === producto.id);
  const isSelectedCategory = cart.some(
    (product) => product.categoria === producto.categoria
  );

  return (
    <div className="mx-auto mb-4 w-64 h-100 relative">
      <button className="absolute top-5 right-5 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
        {`${precio} ${precio > 1 ? "Gemas" : "Gema"}`}
      </button>
      <div className="bg-gray-800 shadow-xl rounded-lg py-3 hover:border-2 hover:border-purple-700">
        <div className="px-4 pt-8">
          <div className="photo-wrapper relative">
            <img
              className="w-20 rounded-full mx-auto"
              src={imagen}
              alt={nombre}
            />
          </div>
          <div className="p-2 text-white">
            <div className="text-center text-gray-400 text-xs font-semibold"></div>
            <table className="text-xs my-3">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-white-500 font-extrabold">
                    {nombre}
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 h-20 align-top">
                    {descripcion}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <button
                className={`rounded-full ${
                  isSelected || precio > gemas || isSelectedCategory
                    ? "bg-gray-500 cursor-default"
                    : "bg-purple-500 hover:bg-purple-700"
                } text-gray-100 py-2 px-4 w-full`}
                onClick={() => addToCart(producto)}
                disabled={isSelected || precio > gemas || isSelectedCategory}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
