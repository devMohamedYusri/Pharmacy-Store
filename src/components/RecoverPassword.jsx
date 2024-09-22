import { useState } from "react";
import LoginInput from "../design/LoginInput";
import Hint from "../design/Hint";
import LoginTitle from "../design/LoginTitle";
import LoginP from "../design/LoginP";
import Button from "../design/Button";

function RecoverPassword() {
    const [email, setEmail] = useState("");
    return (
        <div className="flex flex-col items-center justify-center shadow-lg w-1/3 mx-auto my-28 p-20 h-[70vh]">
            <LoginTitle text="Recover Password" />
            <LoginP text="Enter your e-mail to receive a password reset link:" />
            <form className="flex flex-col items-center justify-center w-full">
                <LoginInput name="Email" type="email" value={email} setValue={setEmail} />
                <Button text="Send Reset Link" type="submit" className="mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200" />
            </form>
            <Hint text="Back to login" link="/login" className="mt-1" name="Login" />
        </div>
    );
}

export default RecoverPassword;
