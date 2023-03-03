import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state";
import Item from "./Item";

const Catalog = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const items = useSelector((state) => state.cart.items);
  const getItems = async () => {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "GET",
      }
    );
    const ItemsJson = await items.json();
    dispatch(setItems(ItemsJson.data));
  };

  useEffect(() => {
    getItems();
  }, []);

  const topRated = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrival = items.filter(
    (item) => item.attributes.category === "newArrival"
  );
  const bestSeller = items.filter(
    (item) => item.attributes.category === "bestSeller"
  );

  return (
    <div>
      <div>
        <div className="flex flex-wrap justify-center mt-6">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
