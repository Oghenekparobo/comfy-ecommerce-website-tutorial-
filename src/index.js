import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";

// dev-262ai44kr3f4e4pv.us.auth0.com

// PV7KdTNh2ogxY8Kcu6z3dLnluIY0RSp4

// WWCIO32pWdLpohbZvSUm64XbkltOGEuPIPnbCiQtVbJBGX1OF9EQrje2kr9BlE77

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-262ai44kr3f4e4pv.us.auth0.com"
      clientId="PV7KdTNh2ogxY8Kcu6z3dLnluIY0RSp4"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
