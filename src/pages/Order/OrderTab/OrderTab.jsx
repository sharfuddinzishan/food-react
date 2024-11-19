import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="m-4 grid grid-cols-3 gap-y-6">
        {items?.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default OrderTab;
