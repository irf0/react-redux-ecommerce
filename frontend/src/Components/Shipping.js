import React from "react";
import AddressForm from "./AddressForm";

const Shipping = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold">Shipping Information</h1>
        <AddressForm
          type="shippingAddress"
          values={values.shippingAddress}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Shipping;
