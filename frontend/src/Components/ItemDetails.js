import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../state";
import BasicTabs, { DescTabs } from "./Tabs";
import LabTabs from "./Tabs";

const ItemDetails = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const navigate = useNavigate();

  async function getItem() {
    const response = await fetch(
      `https://earnest-sprinkles-a569ca.netlify.app/${itemId}?populate=image`,
      { method: "GET" }
    );
    const data = await response.json();
    setItem(data.data);
  }

  //Related products
  async function getRelatedItems() {
    const response = await fetch(
      "https://react-redux-ecommerce-six.vercel.app/api/items?populate=images",
      { method: "GET" }
    );
    const dataJson = await response.json();
    setRelatedItems(dataJson.data);
  }

  useEffect(() => {
    getItem();
    getRelatedItems();
  }, [itemId]);

  return (
    <div>
      <div className="flex">
        <div className="flex w-508 h-510 ml-7 mt-8 justify-center items-center rounded-md">
          <img
            className="w-508 h-510 rounded-md"
            src={`http://localhost:1337${item?.attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url}`}
            alt={item?.attributes?.name}
          />
        </div>
        <div className="flex ml-2 flex-col w-508 h-510 mt-8  rounded-md">
          <h1 className="text-3xl font-bold">{item?.attributes?.name}</h1>
          <p> {item?.attributes?.shortDesc}</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            laudantium architecto doloremque debitis molestiae. Ducimus tempore
            nulla quis illum consequatur, dolorum excepturi possimus quaerat
            quibusdam voluptates porro unde culpa autem?
          </p>
          <select name="Size" className="w-20">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <div className="text-white mt-3">
            <button
              className="p-1 bg-amber-700 rounded-full mr-1"
              type="button"
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              <AiOutlineMinus />
            </button>
            <span className="text-black">
              <b>({count})</b>
            </span>
            <button
              className="p-1 bg-amber-700 rounded-full ml-1"
              type="button"
              onClick={() => setCount(count + 1)}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="flex justify-around  mt-3 text-white font-bold">
            <button
              className="bg-amber-700 rounded-sm mr-3 ml-1 p-1 w-1/2"
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-amber-700 rounded-sm ml-3 mr-1 p-1 w-1/2"
            >
              BUY NOW
            </button>
          </div>
          <h1 className="font-extrabold">Attention:</h1>
          <p className="font-semibold">
            It is possible to make small carousel images like the ones in
            Amazon.com but for now for time's sake. I have not included the
            feature.
          </p>
        </div>
      </div>
      <DescTabs />
    </div>
  );
};

export default ItemDetails;
