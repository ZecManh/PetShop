import { NavLink } from "react-router-dom";
import "./Banner.scss";
function Banner() {
  return (
    <>
      <div className="section-1">
        <div className="img-section1">
          <img className="banner-img" src="../src/assets/ricky.png" alt="" />
          <img
            className="banner-img-tablet"
            src="../src/assets/banner_tablet.jpg"
            alt=""
          />
        </div>
        <div className="content-section1 ">
          <h2 className="text-*">From Furry Friends to Family Members</h2>
          <div className="button-shop-now">
            <NavLink to="/shop">
              {" "}
              <button
                type="button"
                className="text-black bg-[#cff1ff]  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Shop Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
