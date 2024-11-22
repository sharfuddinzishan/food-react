import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useCart } from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const { name, image, price, recipe, _id } = item;
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((result) => {
        if (result?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Item ${name} added!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Are you sure to login?",
        text: "You won't be able to add to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want to login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn btn-outline text-orange-400 border-0 border-b-4 hover:text-orange-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
