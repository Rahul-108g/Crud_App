import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fecthCreateData, fecthShowData } from "../Feature/UserDetailSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigation = useNavigate();
  const [gender, setGender] = useState("");
  const nameElement = useRef();
  const emailElement = useRef();
  const ageElement = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    const name = nameElement.current.value;
    const email = emailElement.current.value;
    const age = ageElement.current.value;

    const data = {
      name: name,
      eamil: email,
      age: age,
      gender: gender,
    };

    console.log(data);

    dispatch(fecthCreateData(data));
    navigation("/post");

    nameElement.current.value = " ";
    emailElement.current.value = " ";
    ageElement.current.value = " ";
  };

  return (
    <div className="container mt-5" data-aos="flip-up" data-aos-duration="1000">
      <div className="card border rounded-5">
        <h1 className="mx-auto my-3">Fill The Form</h1>
        <form onSubmit={submitHandler} className=" card-body w-75 mx-auto">
          <div className="mb-3 mt-3">
            <label htmlFor="uname" className="form-label">
              Name
            </label>
            <input
              ref={nameElement}
              type="text"
              className="form-control"
              id="uname"
              placeholder="Enter Name"
              name="uname"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              ref={emailElement}
              type="email"
              className="form-control"
              id="Email"
              placeholder="Enter Email"
              name="pswd"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Age
            </label>
            <input
              ref={ageElement}
              type="text"
              className="form-control"
              id="pwd"
              placeholder="Enter Age"
              name="pswd"
            />
          </div>

          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="gender"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />

            <label className="form-check-label" htmlFor="radio1">
              {" "}
              Male
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              onChange={(e) => setGender(e.target.value)}
              type="radio"
              className="form-check-input"
              id="radio2"
              name="gender"
              value="Female"
            />

            <label className="form-check-label" htmlFor="radio2">
              {" "}
              Female
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
