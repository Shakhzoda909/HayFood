import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCart } from "@/contexts/cart";
import { ShoppingBag } from "lucide-react";

const CartSheet = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { items, addToCart, removeFromCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Cart title</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-[14px]">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-[200px]">
              <div className="flex flex-col items-center justify-center mt-[100px]">
                <ShoppingBag className="w-[100px] h-[100px]"/>
                <span className="text-center text-[20px] mt-[10px] mb-[10px]">Savatcha bo'sh</span>
                <span className="text-center text-lightgreen cursor-pointer" onClick={() => setOpen(false)}>Menuga qaytasizmi?</span>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
              className="flex gap-[20px] items-start justify-start"
            >
              <div className="flex items-start justify-center gap-[10px]">
                <img
                  className="w-[100px] h-[100px] object-cover"
                  src={
                    "https://i.pinimg.com/736x/5f/b1/a8/5fb1a81fa8126460808119293af40b81.jpg"
                  }
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                <span>{item.name}</span>
                <span>{item.price}</span>
                <div className="flex items-center justify-center mt-[16px] space-x-[10px]">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-lightgreen text-white px-[10px] py-[3px] rounded-[10px]"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-lightgreen text-white px-[10px] py-[3px] rounded-[10px]"
                  >
                    +
                  </button>
                </div>
              </div>
              </div>
            ))
          )}
        </div>
        <SheetFooter>
          <SheetClose asChild>Submit Order</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
