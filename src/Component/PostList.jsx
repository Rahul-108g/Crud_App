import { useEffect, useState } from "react";
import PostLists from "../Component/PostLists";
import { fecthShowData } from "../Feature/UserDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

const PostList = () => {
  const dispatch = useDispatch();
  const { user, loading, searchData } = useSelector((state) => state.app);
  const [radioData, setRadioData] = useState("");

  useEffect(() => {
    dispatch(fecthShowData());
  }, []);

  return (
    <div className="container 50 tc">
      <h1 className=" mt-3 text-center">All Data</h1>

      {/* addoption for filter onnbasis on geneder */}
      <div className="text-center">
        <input
          type="radio"
          className="form-check-input mx-1 "
          checked={radioData === ""}
          id="radio1"
          name="gender"
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label mx-2" htmlFor="radio1">
          {" "}
          All
        </label>

        <input
          type="radio"
          className="form-check-input mx-1"
          id="radio2"
          name="gender"
          value="Male"
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label mx-2" htmlFor="radio2">
          {" "}
          Male
        </label>

        <input
          onChange={(e) => setRadioData(e.target.value)}
          checked={radioData === "Female"}
          type="radio"
          className="form-check-input mx-1"
          id="radio3"
          name="gender"
          value="Female"
        />
        <label className="form-check-label mx-2" htmlFor="radio3">
          {" "}
          Female
        </label>
      </div>

      {user &&
        user
          .filter((val) => {
            if (searchData.length === 0) {
              return val;
            } else {
              return val.name.toLowerCase().includes(searchData.toLowerCase());
            }
          })
          .filter((val) => {
            if (radioData === "Male") {
              return val.gender === radioData;
            } else if (radioData === "Female") {
              return val.gender === radioData;
            } else {
              return val;
            }
          })

          .map((item) => <PostLists key={item.id} item={item} />)}
      {loading && <Loading />}
    </div>
  );
};

export default PostList;
