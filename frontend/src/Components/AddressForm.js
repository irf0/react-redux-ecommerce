import React from "react";
import { getIn } from "formik";

const AddressForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <form onSubmit={handleSubmit} className="flex justify-center m-5">
        <div className="grid grid-cols-3 gap-7 sm:grid-cols-2">
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="First Name*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.firstName}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="Last Name*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.lastName}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="Address1*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.address1}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="Address2(optional)"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.address2}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="City*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.city}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="State*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.state}
          />
          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="Zip Code*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.zip}
          />

          <input
            className="p-2 border border-amber-700"
            type="text"
            placeholder="Country*"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.country}
          />
          <button
            type="submit"
            className="w-72 bg-amber-700 p-2 rounded-md text-white font-bold"
            onClick={handleSubmit}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
