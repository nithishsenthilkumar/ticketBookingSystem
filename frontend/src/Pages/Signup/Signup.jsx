import React, { useState } from "react";
<<<<<<< HEAD:frontend/src/Components/SignUp.jsx
import background from "../Asserts/background2.jpg";
import side from "../Asserts/side.jpg";
=======
import {useNavigate} from 'react-router-dom';
import background from "../../assets/background.jpg";
import axiosInstance from "../../utils/axiosInstance";
>>>>>>> 63312f230e7d8416c62c78eb1dd44b43db65ccac:frontend/src/Pages/Signup/Signup.jsx

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
  const [error,setError]=useState("");
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
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/create-account', formData);
      // console.log(response.data);
      if(response.data&&response.data.error){
        setError(response.data.message);
        return;
      }

      if(response.data&&response.data.accessToken){
        localStorage.setItem("token",response.data.accessToken);
        navigate('/dashboard');
      }
    } catch (error) {
      if(error.response&&error.response.data&&error.response.data.message){
        setError(error.response.data.message);
    }else{
        setError("An unexpected error occured");
    } 
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat p-12"
      style={{ backgroundImage: `url(${background})` }}
    >
<<<<<<< HEAD:frontend/src/Components/SignUp.jsx
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
=======
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-title mb-6 text-center">Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Street</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          {error&& <p className='text-red-500 text-xs pb-1'>{error}</p>}   
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
>>>>>>> 63312f230e7d8416c62c78eb1dd44b43db65ccac:frontend/src/Pages/Signup/Signup.jsx
      </div>
    </div>
  );
};

export default Signup;