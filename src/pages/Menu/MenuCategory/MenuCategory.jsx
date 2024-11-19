import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ title, img, items }) => {
  return (
    <>
      {img && <Cover title={title} img={img} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16 mb-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {items && (
        <Link to={`/order/${title}`}>
          <button className="mb-4 btn btn-outline border-0 border-b-4 mt-4 block mx-auto">
            Order Your Favourite Food
          </button>
        </Link>
      )}
    </>
  );
};

export default MenuCategory;
