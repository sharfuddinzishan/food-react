const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="absolute right-5 top-4 font-bold text-white bg-slate-900 px-4 py-2">
          ${price}
        </p>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline text-orange-400 border-0 border-b-4 hover:text-orange-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
