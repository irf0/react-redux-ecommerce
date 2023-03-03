import React from "react";

const Newsletter = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="w-2/4 sm:w-72 sm:h-44 h-56 p-3 border-2 border-amber-600 rounded-sm">
        <div>
          <h1 className="text-center font-extrabold">Subscribe!</h1>
          <p className="text-center font-semibold">
            Subscribe and get ₹499 OFF on your first Order
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <input
            type="email"
            placeholder="Email"
            className="w-72 sm:w-40 text-center rounded-md border border-amber-700"
          />
          <button className="p-1 rounded-md text-white font-bold bg-amber-700 ml-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
