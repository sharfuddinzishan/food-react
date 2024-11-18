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
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>FoodBD || Menu</title>
      </Helmet>
      <MenuCategory title={"Our Menu"} img={menuImg} />
      <SectionTitle heading={"Todays's Offer"} subHeading={"Don't miss"} />
      <MenuCategory items={offered} />
      <MenuCategory title={"Desserts"} img={dessertImg} items={desserts} />
      <MenuCategory title={"Pizza"} img={pizzaImg} items={pizza} />
      <MenuCategory title={"Salad"} img={saladImg} items={salad} />
      <MenuCategory title={"Soups"} img={soupImg} items={soup} />
    </>
  );
};

export default Menu;
