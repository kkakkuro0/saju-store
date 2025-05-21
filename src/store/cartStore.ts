import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, useProductStore } from "./productStore";

export type CartItem = {
  productId: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartItems: () => (CartItem & { product: Product })[];
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (productId, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find((item) => item.productId === productId);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { productId, quantity }],
          });
        }
      },

      removeFromCart: (productId) => {
        const { items } = get();
        set({
          items: items.filter((item) => item.productId !== productId),
        });
      },

      updateQuantity: (productId, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          return get().removeFromCart(productId);
        }

        set({
          items: items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getCartItems: () => {
        const { items } = get();
        const products = useProductStore.getState().products;

        return items.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) {
            console.error(`Product with id ${item.productId} not found`);
            return { ...item, product: {} as Product };
          }
          return { ...item, product };
        });
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const cartItems = get().getCartItems();
        return cartItems.reduce((total, item) => {
          // 할인 가격이 있으면 할인 가격 사용, 없으면 원래 가격 사용
          const price = item.product.discountPrice || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "saju-cart-storage",
    }
  )
);
