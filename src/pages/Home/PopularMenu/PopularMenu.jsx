import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <>
      <section className="mb-12">
        <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
        <div className="grid md:grid-cols-2 gap-10">
          {popularItems?.map((item) => (
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
