import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let ignore = false;
    const getItems = async () => {
      const result = await axios.get("./menu.json");
      if (!ignore) {
        if (result) {
          setMenu(result.data);
          setLoading(false);
        }
      }
    };
    getItems();
    return () => {
      ignore = true;
    };
  }, []);
  return [menu, loading];
};

export default useMenu;
