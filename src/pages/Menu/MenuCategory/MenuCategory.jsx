import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ title, img, items }) => {
  return (
    <>
      {title && <Cover title={title} img={img} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16 mb-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
