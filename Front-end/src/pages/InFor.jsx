import { useState } from "react";
import Helmet from "../components/Helmet";

const InFor = () => {
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState(sessionStorage.getItem("fullname"));
  const [phone, setPhone] = useState(sessionStorage.getItem("phone"));
  const [address, setAddress] = useState(sessionStorage.getItem("address"));
  const handleUpdate = () => {
    setUpdate(true);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleSave = () => {
    sessionStorage.setItem("fullname", name);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("address", address);
    setUpdate(false); // Chuyển về trạng thái không cập nhật
  };
  return (
    <Helmet title="Thông tin">
      <div className="containerInfor">
        <div className="rowInfor">
          <h2>THÔNG TIN CÁ NHÂN</h2>
          <p>
            Họ và tên:{" "}
            {update ? (
              <input type="text" value={name} onChange={onChangeName} />
            ) : (
              sessionStorage.getItem("fullname")
            )}{" "}
          </p>
          <p>
            Số điện thoại:{" "}
            {update ? (
              <input type="text" value={phone} onChange={onChangePhone} />
            ) : (
              sessionStorage.getItem("phone")
            )}
          </p>
          <p>
            Địa chỉ:{" "}
            {update ? (
              <input type="text" value={address} onChange={onChangeAddress} />
            ) : (
              sessionStorage.getItem("address")
            )}
          </p>
          <button onClick={handleUpdate}>Cập nhập</button>
          {update ? <button onClick={handleSave}>Lưu</button> : <></>}
        </div>
      </div>
    </Helmet>
  );
};
export default InFor;
