import axios from "axios";
import { useEffect, useState } from "react";
import { TarjetaProductoComponent } from "./TarjetaProductoComponent";
import { IProducto } from "../interfaces/productos.interface";

export const ListadoProductosComponent = () => {
  const [productos, setProductos] = useState<IProducto[]>([]);

  const getProductos = async (): Promise<IProducto[]> => {
    try {
      const response = await axios.get("http://localhost:3001/productos");
      const productos = response.data;
      return productos;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  useEffect(() => {
    async function fetchData() {
      const productosData = await getProductos();
      setProductos(productosData);
    }
    fetchData();
  }, []);

  //console.log(productos);
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-10">
      {productos.map((producto) => (
        <TarjetaProductoComponent producto={producto} />
      ))}
    </div>
  );
};
