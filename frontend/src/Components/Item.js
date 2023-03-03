//Individual items component-->This component will be rendered in the ItemDetails route

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../state";

const Item = ({ item }) => {
  //item is coming from ProductList.js comp from setItems in redux
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, name, image, price, shortDesc } = item.attributes;
  const {
    data: {
      0: {
        attributes: {
          formats: {
            medium: { url },
          },
        },
      },
    },
  } = image;

  return (
    <div>
      <div className="flex justify-center">
        <img
          className="w-72 h-340 rounded-md cursor-pointer mt-2"
          src={`http://localhost:1337${url}`}
          alt={item.name}
          onClick={() => navigate(`/item/${item.id}`)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <h3 className="font-bold ml-4">{name}</h3>
      <p className="font-semibold ml-4">{shortDesc}</p>
      <p className="font-bold ml-4">₹{price}</p>

      <button
        className="p-1 rounded-sm font-bold bg-amber-700 mt-2 text-white w-72 ml-4"
        onClick={() => {
          dispatch(addToCart({ item: { ...item, count } }));
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};
export default Item;
