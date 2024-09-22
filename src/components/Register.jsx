import { useState } from "react";
import LoginInput from "../design/LoginInput";
import Hint from "../design/Hint";
import LoginTitle from "../design/LoginTitle";
import LoginP from "../design/LoginP";
import Button from "../design/Button";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center shadow-lg w-1/3 mx-auto my-28 p-20 h-[70vh]">
      <LoginTitle text="Create an account" />
      <LoginP text="Enter your details to register:" />
      <form className="flex flex-col items-center justify-center w-full">
        <LoginInput name="Name" type="text" value={name} setValue={setName} />
        <LoginInput name="Email" type="email" value={email} setValue={setEmail} />
        <LoginInput name="Password" type="password" value={password} setValue={setPassword} />
        <LoginInput name="Confirm Password" type="password" value={confirmPassword} setValue={setConfirmPassword} />
        <Button text="Register" type="submit" className="mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200"/>
      </form>
      <Hint text="Already have an account?" link="/login" className="mt-1" name="Login" />
    </div>
  );
}

export default Register;
