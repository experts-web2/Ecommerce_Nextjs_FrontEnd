import React from "react";

const ShippingDetails = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">SHIPPING DETAILS</h2>
      <p className="mb-4">Free Shipping on all orders above Rs.2,500</p>
      <p className="mb-4">Fixed Shipping on all orders below Rs.2,500</p>
      <p className="mb-4">The delivery time will be 03-05 working days</p>
      <p className="mb-4">
        The parcel will be sent through a registered courier company. Customers
        are supposed to pay before receiving the parcel due to security
        concerns.
      </p>
      <p className="mb-4">
        Customer should simply reject the parcel in case it's opened or damaged
        at the time of delivery.
      </p>
    </div>
  );
};

export default ShippingDetails;
