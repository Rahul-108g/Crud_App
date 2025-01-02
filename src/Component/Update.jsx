import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fecthUpdateData } from "../Feature/UserDetailSlice";

const Update = () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  console.log(id);
  const { user, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      const singleUser = user.filter((item) => item.id === id);
      setData(singleUser[0]);
      console.log(singleUser);
    }
  }, []);

  // for transfer data
  let newData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fecthUpdateData(data));
    console.log(data);
    navigator("/post");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card border rounded-5">
          <h1 className="mx-auto my-3">Update The Data</h1>
          <form
            className=" card-body w-75 mx-auto"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                value={data && data.name}
                onChange={newData}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="Email"
                placeholder="Enter Email"
                name="email"
                value={data && data.email}
                onChange={newData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="pwd"
                placeholder="Enter Age"
                name="age"
                value={data && data.age}
                onChange={newData}
              />
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="radio1"
                name="gender"
                value="Male"
                checked={data && data.gender === "Male"}
                onChange={newData}
              />
              Male
              <label className="form-check-label" htmlFor="radio1"></label>
            </div>
            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="radio2"
                name="gender"
                value="Female"
                checked={data && data.gender === "Female"}
                onChange={newData}
              />
              Female
              <label className="form-check-label" htmlFor="radio2"></label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Update;
