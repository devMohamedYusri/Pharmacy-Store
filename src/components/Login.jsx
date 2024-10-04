import { useEffect, useState } from "react";
import LoginInput from "../design/LoginInput";
import Hint from "../design/Hint";
import LoginTitle from "../design/LoginTitle";
import LoginP from "../design/LoginP";
import Button from "../design/Button";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Footer from './Footer';
import NavBar from './NavBar';
import logo from "../assets/dalida.jpg";
import Loader from './Loader'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
    try {
      const response = await fetch("http://pharmacy1.runasp.net/api/Account/Login", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      } else {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        secureLocalStorage.setItem('user', JSON.stringify({ email, password }));
        navigate('/');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader visible={loading} /> : <>
        <NavBar logo={logo} />
        <div className="flex flex-col items-center justify-center shadow-lg w-1/3 mx-auto my-28 p-20 h-[70vh]">
          <LoginTitle text="Login to my account" />
          <LoginP text="Enter your e-mail and password:" />
          <div>
            {error && <p className="text-red-400 p-3 font-semibold">{error}</p>}
          </div>
          <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
            <LoginInput name="Email" type="email" value={email} setValue={setEmail} />
            <LoginInput name="Password" type="password" value={password} setValue={setPassword} />
            <Button text="Login" type="submit" className="mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200" />
          </form>
          <Hint text="Don't have an account?" link="/register" className="mt-1" name="Register" />
          <Hint text="Forgot your password?" link="/recover-password" className="mt-1" name="Recover password" />
        </div>
        <Footer />
      </>}
    </>
  );
}

export default Login;