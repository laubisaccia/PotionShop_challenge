import { IProducto } from "../interfaces/productos.interface";

interface ProductoProps {
  producto: IProducto;
}
export const TarjetaProductoComponent = ({ producto }: ProductoProps) => {
  const { nombre, precio, descripcion, imagen } = producto;
  return (
    <div className="mx-auto mb-4 w-64 h-100 relative">
      <button className="absolute top-5 right-5 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
        {`${precio} ${precio > 1 ? "Gemas" : "Gema"}`}
      </button>
      <div className="bg-gray-800 shadow-xl rounded-lg py-3">
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
                className="rounded-full bg-purple-500 text-gray-100 py-2 px-4 w-full"
                //onClick={() => onAdd(producto)}
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
