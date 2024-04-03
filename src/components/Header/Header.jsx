import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faCat,
  faShop,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const [showDiv, setShowDiv] = useState(true);
  const columnFlex = () => {
    setShowDiv(!showDiv);
  };
  return (
    <>
      <div className="header flex justify-between items-center p-10">
        <div className="start-header ">
          <img src="../src/assets/icon.png" style={{ width: "100px" }} alt="" />
        </div>
        <div className="menu" onClick={columnFlex}>
          <FontAwesomeIcon className="menu-bar" icon={faBars} />
        </div>

        <ul className="mid-header flex style">
          <li>
            <NavLink to="/shop">
              <FontAwesomeIcon className="css-icon" icon={faShop} />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dog">
              <FontAwesomeIcon className="css-icon" icon={faDog} />
              Dog
            </NavLink>
          </li>
          <li>
            <FontAwesomeIcon className="css-icon" icon={faCat} />
            <NavLink to="/cat">Cat</NavLink>
          </li>
        </ul>
        <ul className="end-header flex">
          <li>
            <a href="">
              <SearchOutlined />
            </a>
          </li>
          <li>
            <a href="">
              <UserOutlined />
            </a>
          </li>
          <li>
            <a href="">
              <ShoppingCartOutlined />
            </a>
          </li>
        </ul>
      </div>
      {showDiv ? (
        ""
      ) : (
        <>
          <ul
            className="mid-header-res flex flex-col style ps-11 md:hidden"
            style={{ background: "#00274a", color: "#d9f1ff" }}
          >
            <li className="pe-3">
              <FontAwesomeIcon className="mr-3" icon={faShop} />
              <a href="#">Shop</a>
            </li>
            <li>
              <FontAwesomeIcon className="mr-3" icon={faDog} />
              <a href="#">Dog</a>
            </li>
            <li>
              <FontAwesomeIcon className="mr-3" icon={faCat} />
              <a href="#">Cat</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
          <ul
            className="end-header-res flex flex-col  ps-11  md:hidden"
            style={{ background: "#00274a", color: "#d9f1ff" }}
          >
            <li>
              <a href="#">
                <SearchOutlined />
              </a>
            </li>
            <li>
              <a href="#">
                <UserOutlined />
              </a>
            </li>
            <li>
              <a href="#">
                <ShoppingCartOutlined />
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  );
}
export default Header;
