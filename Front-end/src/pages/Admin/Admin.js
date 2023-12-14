import { Menu } from "antd";
import { useState } from "react";
import { AppstoreOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { getItem } from "../../utils/getItem";
import { useHistory } from "react-router-dom";
import AdminUser from "../../components/AdminUser/AdminUser";
import { removeUser } from "../../redux/user-modal/userModalSlice";
import AdminProduct from "../../components/AdminProduct/AdminProduct";
import { WrapperContent } from "./styles";
import { useDispatch, useSelector } from "react-redux";
const Admin = () => {
  const [keySelected, setKeySelected] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const renderKey = (key) => {
    switch (key) {
      case "user":
        return <AdminUser />;
      case "product":
        return <AdminProduct />;
      case "logout":

        sessionStorage.clear();
        dispatch(removeUser());
        history.push("/login");

      default:
        return;
    }
  };

  const items = [
    getItem("Quản lý người dùng", "user", <UserOutlined />),
    getItem("Quản lý sản phẩm", "product", <AppstoreOutlined />),
    getItem("Đăng xuất", "logout", <LogoutOutlined />),
  ];

  const handleClick = ({ item, key }) => {
    setKeySelected(key);
  };

  return (
    <div style={{}}>
      <div style={{}}>
        <div style={{ display: "flex" }}>
          <Menu
            mode="inline"
            onClick={handleClick}
            style={{
              width: 256,
              height: "150vh",
              borderRight: "2px solid #ccc",
            }}
            items={items}
          />
          <WrapperContent style={{ padding: "10px 15px 15px", flex: 1 }}>
            {renderKey(keySelected)}
          </WrapperContent>
        </div>
      </div>
    </div>
  );
};

export default Admin;
