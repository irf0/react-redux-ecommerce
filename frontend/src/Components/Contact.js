import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-1/2 h-screen flex justify-center flex-col">
          <h1 className="font-bold">Welcome to tee-cart</h1>
          <p>The t-shirt heaven!</p>
          <p>
            Contact us here:
            <a href="mailto:example@example.com">tee-cart@gmail.com</a>
            <br />
            <h2>Phone Number : 222-(333)-444</h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
