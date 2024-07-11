import React, { useState } from "react";
import background from "../Asserts/background2.jpg";
import side from "../Asserts/side.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat p-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute min-h-screen inset-0 bg-black opacity-40"></div>
      <div className="bubbles-container absolute min-h-screen inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <div
        className="relative rounded-xl shadow-md w-full max-w-4xl flex bg-white bg-opacity-10"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <div className="hidden md:flex w-1/2">
          <img
            src={side}
            alt="side"
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center tracking-wider mt-4">
            CREATE PROFILE
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="phonenumber"
                placeholder="phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.street"
                placeholder="street"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.city"
                placeholder="city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.state"
                placeholder="state"
                value={formData.address.state}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address.country"
                placeholder="country"
                value={formData.address.country}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 mb-8 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;