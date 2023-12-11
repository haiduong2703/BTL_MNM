import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/user-modal/userModalSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  let checkUser = true;

  const user = useSelector((state) => state.user);

  if (user.role === 2) {
    // checkUser = false;
  }

  const dispatch = useDispatch();

  // Hàm xử lý khi click vào biểu tượng tìm kiếm
  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput); // Đảo ngược trạng thái hiển thị của ô input
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  const handleNavigate = () => {
    if (sessionStorage.getItem("username") !== null) {
      if (user?.role === 2) {
        history.push("/admin");
      } else {
        toast.error("Chức năng này chỉ dành cho admin!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      history.push("/login");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(removeUser());
    history.push("/");
  };

  return checkUser ? (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link
            to="/"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right_item">
              <i className="bx bx-search" onClick={handleSearchIconClick}></i>

              {/* Thêm class 'show' khi showSearchInput là true */}
              <div
                className={`header__menu__item__search-input ${
                  showSearchInput ? "show" : ""
                }`}
              >
                <input type="text" placeholder="Tìm kiếm..." />
              </div>
            </div>
            <div className="header__menu__item header__menu__right_item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>

            <div className="header__menu__item header__menu__right_item">
              <i
                className="bx bx-user"
                onClick={handleNavigate}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="header__menu__item header__menu__right_item">
              {sessionStorage.getItem("username") ? (
                <i
                  onClick={handleLogout}
                  className="bx bx-log-out"
                  style={{ cursor: "pointer" }}
                ></i>
              ) : (
                <div></div>
              )}
            </div>
            {/* <div className="header__menu__item header__menu__right_item">
              <Link to="/login">
                <i className="bx bx-log-in"></i>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <></>
  );
};

export default Header;
