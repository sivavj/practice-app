import React from "react";
import { useForm } from "react-hook-form";

interface LogData {
  email: string;
  password: string;
}
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogData>();
  const onSubmit = (data: LogData) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="container mt-5">
      <div className="card col-6 mx-auto">
        <div className="card-header">
          <h3 className="text-center text-primary">Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <label className="form-label">Email address</label>
              <input
                className="form-control"
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">This Field is Required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-danger"> Characters miss matched!</p>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", {
                  required: true,
                  pattern:
                    /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <ul className="text-danger">
                  <li>
                    The password must contain one or more uppercase characters
                  </li>
                  <li>
                    The password length must be greater than or equal to 8
                  </li>
                  <li>
                    The password must contain one or more lowercase characters
                  </li>
                  <li>
                    The password must contain one or more numeric values The
                    password must contain one or more special characters
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
