import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState();
  useEffect(() => {
    let ignore = false;
    const getItems = async () => {
      const result = await axios.get("./menu.json");
      if (!ignore) {
        if (result) {
          const popularItems = result.data.filter(
            (item) => item.category === "popular"
          );
          setMenu(popularItems);
        }
      }
    };
    getItems();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <section className="mb-12">
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
        <div className="grid md:grid-cols-2 gap-10">
          {menu?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <button className="btn btn-outline border-0 border-b-4 mt-4 block mx-auto">
          View Full Menu
        </button>
      </section>
    </>
  );
};

export default PopularMenu;
