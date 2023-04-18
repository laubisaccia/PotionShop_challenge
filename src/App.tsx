import { useContext, useState } from "react";
import { CarritoComponent } from "./components/CarritoComponent";
import { HeaderComponent } from "./components/HeaderComponent";
import { ListadoProductosComponent } from "./components/ListadoProductosComponent";
import { CarritoContext, CarritoProvider } from "./context/CarritoContext";

function App() {
  return (
    <CarritoProvider>
      <div
        className="min-h-full bg-fixed"
        style={{ backgroundImage: "url(background.webp)" }}
      >
        <HeaderComponent />
        <div className="flex justify-center min-h-full">
          <div className="max-w-lg w-full py-16">
            <CarritoContext.Consumer>
              {({ showCarrito }) => (
                <>
                  {showCarrito ? (
                    <CarritoComponent />
                  ) : (
                    <ListadoProductosComponent />
                  )}
                </>
              )}
            </CarritoContext.Consumer>
          </div>
        </div>
      </div>
    </CarritoProvider>
  );
}
export default App;
