import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const RazorpayPayment = () => {
  const [orderId, setOrderId] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const BASE_URL = "http://localhost:1337";

  const createOrder = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/orders`, {
        amount: item.attributes.price,
        currency: "INR",
        notes: {
          firstName,
          address1,
          phone,
          email,
        },
      });
      setOrderId(response.data.orderId);
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/payments`, {
        paymentId,
        orderId,
      });
      console.log(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    alert("Payment section is under development !!");
  };

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 w-full">
        <input
          placeholder="First Name"
          className="border border-amber-700 p-1 mt-3 mx-3"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          className="border border-amber-700 p-1 mt-3 mx-2"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          placeholder="Phone"
          className="border border-amber-700 p-1 mt-3 mx-2"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="Email"
          className="border border-amber-700 p-1 mt-3"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Address1"
          className="border border-amber-700 p-1 mt-3 mx-3"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
        <input
          placeholder="Address2(optional)"
          className="border border-amber-700 p-1 mt-3 mx-2"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <input
          placeholder="State"
          className="border border-amber-700 p-1 mt-3 mx-2"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          placeholder="Country"
          className="border border-amber-700 p-1 mt-3 mx-2 w-full"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          placeholder="Pincode"
          className="border border-amber-700 p-1 mt-3 mx-2"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <button
          className="bg-amber-700 rounded-md text-white mx-3 my-2"
          onClick={handleClick}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default RazorpayPayment;
