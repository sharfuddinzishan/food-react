import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]); // Initial state is an empty array
  const [loading, setLoading] = useState(true);

  // Ensure that we are filtering on an array
  const filteredMenu = {
    desserts: menu.filter((item) => item.category === "dessert"),
    soup: menu.filter((item) => item.category === "soup"),
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    drinks: menu.filter((item) => item.category === "drinks"),
    offered: menu.filter((item) => item.category === "offered"),
  };

  useEffect(() => {
    let ignore = false;
    const getItems = async () => {
      try {
        const result = await axios.get("/menu.json");
        if (!ignore && result?.data) {
          setMenu(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };
    getItems();
    return () => {
      ignore = true;
    };
  }, []);
  return { menu, filteredMenu, loading };
};

export default useMenu;
