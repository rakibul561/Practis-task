/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Features from "../Features/Features";

const Price = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white">
      <h2>
        <span className="tex-7xl font-extrabold ">{price}</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>

      <div className="pl-16">
        {
          features.map((feature, index) => <Features
            key={index}
            feature={feature} >

          </Features>)
        }

      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-950 ">Buy Now</button>
    </div>
  );
};

export default Price;