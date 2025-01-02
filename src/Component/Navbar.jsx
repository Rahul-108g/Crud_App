import { Link } from "react-router-dom";
import img1 from "../../public/img-3.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchUser } from "../Feature/UserDetailSlice";

const Navbar = () => {
  const count = useSelector((state) => state.app.user);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  //[searchData] jitnibar search kare utni bar useffect trigger ho

  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-white n1"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={img1}
              className="img-fluid rounded-pill"
              style={{ width: "40px" }}
              alt=""
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="collapsibleNavId"
          >
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item lok">
                <Link className="nav-link active" to="/" aria-current="page">
                  Create Post <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item lok">
                <Link className="nav-link" to="/post">
                  ALL Post({count.length})
                </Link>
              </li>
            </ul>

            <input
              onChange={(e) => setSearchData(e.target.value)}
              className="form-control me-2 w-50"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
