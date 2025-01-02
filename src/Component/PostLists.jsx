import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { fecthDeleteData } from "../Feature/UserDetailSlice";
import { Link } from "react-router-dom";

const PostLists = ({ item }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const showFun = () => {
    setShow(false);
  };

  return (
    <div
      className="container my-2 "
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <div>{show && <Modal showFun={showFun} item={item} />}</div>
      {/* card */}
      <div className="card img-fluid mt-5 w-50 mx-auto border rounded-4">
        <div className="card-body text-center">
          <h5 className="card-title">{item.name}</h5>
          <h6 className="card-title">{item.email}</h6>
          <p className="card-text">{item.gender}</p>
          <a onClick={() => setShow(true)} type="button" className="me-2">
            View
          </a>
          <Link to={`/edit/${item.id}`} className="me-2">
            Edit
          </Link>
          <button
            onClick={() => dispatch(fecthDeleteData(item.id))}
            className="btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostLists;
