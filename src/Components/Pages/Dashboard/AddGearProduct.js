import axios from "axios";
import React from "react";
import { useState } from "react";
import FormInput from "../../UI/FormInput";

const AddGearProduct = () => {
  const [getInputData, setGetInputData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    size: "",
    color: "",
    desc: "",
  });
  const handleOnChange = (e) => {
    setGetInputData({ ...getInputData, [e.target.name]: e.target.value });
  };
  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_URL}addproduct`, {
        title: getInputData.name,
        price: getInputData.price,
        description: getInputData.desc,
        category: getInputData.category,
        stocks: getInputData.stock,
        size: getInputData.size,
        color: getInputData.color,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Product added successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row m-md-5 my-4">
          <form onSubmit={handleApi}>
            <div className="row">
              <div className="col-md-12 col-lg-6 col-sm-12">
                <FormInput
                  name="name"
                  onChange={handleOnChange}
                  value={getInputData.name}
                  placeholder="Enter Name"
                  errorMessage="Name should be 3-16 characters and shouldn't include any special character or number!"
                  label="Name"
                  pattern="^[A-Za-z ]{3,16}$"
                  required={true}
                />
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="form-group">
                  <label htmlFor="">Category</label>
                  <select
                    name="category"
                    onChange={handleOnChange}
                    value={getInputData.category}
                    className="field"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="men">men</option>
                    <option value="women">women</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <FormInput
                  name="price"
                  onChange={handleOnChange}
                  value={getInputData.price}
                  placeholder="Enter price"
                  errorMessage="Price should be 1-9 characters and shouldn't include any special character and alphabet!"
                  label="Price"
                  pattern="^[0-9]{1,9}$"
                  required={true}
                />
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <FormInput
                  name="stock"
                  onChange={handleOnChange}
                  value={getInputData.stock}
                  placeholder="Enter stock"
                  errorMessage="Stock should be 1-9 characters and shouldn't include any special character and alphabet!"
                  label="Stock"
                  pattern="^[0-9]{1,9}$"
                  required={true}
                />
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <FormInput
                  name="size"
                  onChange={handleOnChange}
                  value={getInputData.size}
                  placeholder="Enter size"
                  errorMessage="Size should be 1-16 characters and shouldn't include any special character!"
                  label="Size"
                  pattern="^[A-Za-z0-9]{1,16}$"
                  required={true}
                />
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <FormInput
                  name="color"
                  onChange={handleOnChange}
                  value={getInputData.color}
                  placeholder="Enter color"
                  errorMessage="Color should be 1-16 characters and shouldn't include any special character and numbers!"
                  label="Color"
                  pattern="^[A-Za-z]{1,16}$"
                  required={true}
                />
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12 mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  value={getInputData.desc}
                  name="desc"
                  onChange={handleOnChange}
                  id="descriptonArea"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-md-12 col-lg-6 col-sm-12">
                <label>Upload Photos</label>
                <div className="form-group">
                  <input
                    style={{
                      fontSize: "1.2rem",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                    name="file"
                    type="file"
                    multiple
                  />
                </div>
              </div>
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddGearProduct;