import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./../../contexts/AuthContext";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password, name, photo } = data || {};
    createUser(email, password).then(() => {
      updateUserProfile(name, photo)
        .then(() => {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registered Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch(() => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Registration Failed",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-md shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: "Name Must Be Provided" })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo", { required: "Photo Must Be Provided" })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: "Email Must Be Provided" })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  })}
                />
                {errors?.password?.type === "required" && (
                  <span className="text-red-600">
                    Password can not be empty....
                  </span>
                )}
                {errors?.password?.type === "minLength" && (
                  <span className="text-red-600">
                    Minimum 8 length password..
                  </span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="text-red-600">
                    One UpperCase, One Digit, One Special Character.
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value={"SignUp"}
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div>
              <p>
                <small>Already Have Account? </small>
                <Link to="/login">SignIn</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
