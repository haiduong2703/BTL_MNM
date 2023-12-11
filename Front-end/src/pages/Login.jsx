import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUser } from "../api/product";
import { signUpUser } from "../api/user";
import Spinner from "../components/Spiner";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user-modal/userModalSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [checkRegister, setCheckRegister] = useState(false);
  const [checkLogin, setCheckLogin] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const clickLogin = async () => {
    setLoading(true);

    let checkUser = false;
    const user = await getUser(username);
    if (username === user.tenDangNhap && password === user.matKhau) {
      checkUser = true;
    }
    if (checkUser) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
      dispatch(setUser({ name: user.tenDangNhap, role: user.role }));
      setUsername(username);
      setPassword(password);
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

  const handleSignUp = async () => {
    const res = await signUpUser({
      hoTen: fullname,
      tenDangNhap: username,
      matKhau: password,
      email: email,
      sdt: phone,
      diaChi: address,
      role: 1,
    });
    if (res) {
      setCheckRegister(false);
    }
  };
  return (
    <>
      {checkRegister ? (
        <div className="containerRegister">
          <div className="col">
            <div className="formLogin">
              <h1>R E G I S T E R</h1>
              <h3>Fullname</h3>
              <input
                type="text"
                className="username"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
              <br />

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

              <br />
              <h3>Email</h3>
              <input
                type="text"
                className="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <h3>Phone</h3>
              <input
                type="text"
                className="username"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <br />
              <h3>Address</h3>
              <input
                type="text"
                className="username"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <br />
              <button onClick={handleSignUp} style={{ cursor: "pointer" }}>
                Sign up
              </button>
              <br />
              <p onClick={handleLogin} style={{ cursor: "pointer" }}>
                Bạn đã có tài khoản? Đăng nhập
              </p>
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
              <button onClick={clickLogin} style={{ cursor: "pointer" }}>
                Login
              </button>
              <br />
              <p onClick={handleRegister} style={{ cursor: "pointer" }}>
                Đăng ký tài khoản mới
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
