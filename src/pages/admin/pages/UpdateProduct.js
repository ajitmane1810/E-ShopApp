import React, { useContext } from "react";
import myContext from "../../../context/data/MyContext";

const UpdateProduct = () => {
  const context = useContext(myContext);
  const {products,setProducts,UpdateProduct} = context;
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-20 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              onChange={(e)=>setProducts({...products,title: e.target.value})}
              value={products.title}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[22em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              onChange={(e)=>setProducts({...products,price : e.target.value})}
              value={products.price}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[22em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              onChange={(e)=>setProducts({...products,imgUrl : e.target.value})}
              value={products.imgUrl}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[22em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              onChange={(e)=>setProducts({...products,category:e.target.value})}
              value={products.category}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[22em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="description"
              onChange={(e)=>setProducts({...products,description: e.target.value})}
              value={products.description}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[22em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button 
            onClick={UpdateProduct}
            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg">
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
