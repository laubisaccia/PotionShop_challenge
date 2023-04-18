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

  const fetchData = async () => {
    const productosData = await getProductos();
    setProductos(productosData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-10">
      {productos.map((producto) => (
        <TarjetaProductoComponent key={producto.id} {...producto} />
      ))}
    </div>
  );
};
