import { Helmet } from "react-helmet-async";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import menuImg from "../../../assets/menu/menu-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const { filteredMenu, loading } = useMenu();
  const { desserts, soup, salad, pizza, offered } = filteredMenu || {};
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Helmet>
        <title>FoodBD || Menu</title>
      </Helmet>
      <MenuCategory title={"Our Menu"} img={menuImg} />
      <SectionTitle heading={"Todays's Offer"} subHeading={"Don't miss"} />
      <MenuCategory title={"offered"} items={offered} />
      <MenuCategory title={"desserts"} img={dessertImg} items={desserts} />
      <MenuCategory title={"pizza"} img={pizzaImg} items={pizza} />
      <MenuCategory title={"salad"} img={saladImg} items={salad} />
      <MenuCategory title={"soups"} img={soupImg} items={soup} />
    </>
  );
};

export default Menu;
