import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AiFillCloseCircle,
  AiFillDelete,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import {
  clearCart,
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../state";
import { useNavigate } from "react-router-dom";

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item?.attributes?.price;
  }, 0);

  return (
    <div>
      {/* MODAL */}
      <div
        className={`${
          isCartOpen
            ? "rounded-tl-md w-3/12 sm:w-10/12 h-screen absolute right-0 top-0 bg-gray-100 shadow-xl z-10 ease-in-out animate-slide-in"
            : "hidden"
        }`}
      >
        <div className="flex justify-between">
          <AiFillCloseCircle
            onClick={() => dispatch(setIsCartOpen(false))}
            className="text-2xl cursor-pointer"
          />
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 my-2 p-1 text-white font-bold rounded-md"
          >
            Clear Cart
          </button>
        </div>
        <h3 className="text-center font-bold">
          Your Cart have ({cart.length}) items
        </h3>

        {/* CART -LIST */}

        {cart.map((item) => (
          <div key={`${item.attributes.name}-${item.id}`}>
            <div className="flex">
              <img
                className="w-36 h-36 ml-4 mb-3 mt-2"
                src={`http://localhost:1337${item?.attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url}`}
                alt={item?.name}
              />
              <div className="flex flex-col ml-3 justify-around">
                <h4>{item?.attributes?.name}</h4>

                <div className="flex">
                  <button
                    className="p-1 bg-amber-700 text-white rounded-full"
                    type="button"
                    disabled={item.count <= 1}
                    onClick={() => dispatch(decreaseCount({ id: item.id }))}
                  >
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="number"
                    readOnly
                    className="font-bold w-7 flex text-right"
                    value={item?.count}
                  />
                  <button
                    className="p-1 bg-amber-700 text-white rounded-full"
                    type="button"
                    onClick={() => dispatch(increaseCount({ id: item.id }))}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>

                <p className="font-bold">₹{item?.attributes?.price}</p>
                <AiFillDelete
                  className=" text-xl text-red-600 cursor-pointer"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                />
              </div>
            </div>
          </div>
        ))}

        {/* Checkout Btn */}
        <div className="absolute bottom-1 w-full ml-4">
          <div className="flex">
            <h4>Subtotal :</h4>
            <h4 className="ml-1 font-bold">{totalPrice}</h4>
          </div>
          <button
            type="button"
            className="p-2 text-white rounded-md w-11/12 font-bold mt-1 bg-amber-700"
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
