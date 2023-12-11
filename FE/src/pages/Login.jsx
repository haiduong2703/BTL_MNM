import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getUser } from "../api/product";
import Spinner from "../components/Spiner";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  let checkUser = false;
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const clickLogin = async () => {
    setLoading(true);

    const user = await getUser(username);
    if (username === user.tenDangNhap && password === user.matKhau) {
      checkUser = true;
    }
    if (checkUser) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("fullname", user.hoTen);
      sessionStorage.setItem("address", user.diaChi);
      sessionStorage.setItem("phone", user.sdt);
      sessionStorage.setItem("password", password);
      setUsername(username);
      setPassword(password);
      console.log(user.ma);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        setCheckLogin(true);
        console.log("Tài khoản chưa tồn tại");
      }, 2000);
    }
  };
  const handleRegister = () => {
    setCheckRegister(true);
  };
  const handleLogin = () => {
    setCheckRegister(false);
  };
  return (
    <>
      {checkRegister ? (
        <div className="containerRegister">
          <div className="col">
            <div className="formLogin">
              <h1>R E G I S T E R</h1>
              <h3>Họ và tên</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />

              <h3>Tên đăng nhập</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />
              <h3>Mật khẩu</h3>
              <input
                type="password"
                className="password"
                onChange={onChangePassword}
                value={password}
              />

              <br />
              <h3>Email</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />
              <h3>Số điện thoại</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />
              <h3>Địa chỉ</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />
              <button onClick={clickLogin}>Login</button>
              <br />
              <p onClick={handleLogin}>Bạn đã có tài khoản? Đăng nhập</p>
            </div>
          </div>
        </div>
      ) : loading ? (
        <Spinner />
      ) : (
        <div className="containerLogin">
          <div className="col">
            <div className="formLogin">
              <h1>L O G I N</h1>
              <h3>Username</h3>
              <input
                type="text"
                className="username"
                onChange={onChangeUsername}
                value={username}
              />
              <br />
              <h3>Password</h3>
              <input
                type="password"
                className="password"
                onChange={onChangePassword}
                value={password}
              />
              <p className={`${checkLogin ? "errorLogin" : "Normal"}`}>
                Tên đăng nhập hoặc mật khẩu không đúng
              </p>
              <br />
              <button onClick={clickLogin}>Login</button>
              <br />
              <p onClick={handleRegister}>Đăng ký tài khoản mới</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
