"use client";

import { PropsWithChildren } from "react";
import { CartProvider } from "./cart/CartContext";

export function Providers({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>;
}
