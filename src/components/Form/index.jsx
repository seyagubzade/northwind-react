import React, { useState } from "react";

const Form = ({ createNewItem }) => {
  const [formData, setFormData] = useState({
    supplierId: "1",
    categoryId: "1",
    quantityPerUnit: "",
    unitPrice: "",
    unitsInStock: "",
    unitsOnOrder: "1",
    reorderLevel: "2",
    discontinued: "0",
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewItem(formData);
  };

  return (
    <div className="mb-5">
      <h4>Supplier Information Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3 flex-wrap">
          <div className="form-group">
            <label htmlFor="quantityPerUnit">Quantity Per Unit:</label>
            <input
              type="text"
              className="form-control"
              id="quantityPerUnit"
              placeholder="Enter Quantity Per Unit"
              value={formData.quantityPerUnit}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">Unit Price:</label>
            <input
              type="text"
              className="form-control"
              id="unitPrice"
              placeholder="Enter Unit Price"
              value={formData.unitPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="unitsInStock">Unit in Stock:</label>
            <input
              type="text"
              className="form-control"
              id="unitsInStock"
              placeholder="Unit in Stock"
              value={formData.unitsInStock}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Enter Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
