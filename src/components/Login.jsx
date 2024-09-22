import { useState } from "react";
import LoginInput from "../design/LoginInput";
import Hint from "../design/Hint";
import LoginTitle from "../design/LoginTitle";
import LoginP from "../design/LoginP";
import Button from "../design/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center shadow-lg w-1/3 mx-auto my-28 p-20 h-[70vh]">
      <LoginTitle text="Login to my account" />
      <LoginP text="Enter your e-mail and password:" />
      <form className="flex flex-col items-center justify-center w-full">
        <LoginInput name="Email" type="email" value={email} setValue={setEmail} />
        <LoginInput name="Password" type="password" value={password} setValue={setPassword} />
        <Button text="Login" type="submit" className="mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200"/>
      </form>
      <Hint text="Don't have an account?" link="/register" className="mt-1" name="Register" />
      <Hint text="Forgot your password?" link="/recover-password" className="mt-1" name="Recover password" />
    </div>
  );
}

export default Login;
