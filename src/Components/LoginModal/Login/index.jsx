'use client';
import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import Logo from "/public/images/Component3.png";
import EmailInput from "@/components/ui/Input/EmailInput";
import PasswordInput from "@/components/ui/Input/PasswordInput";
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, setEmail } from "../../../redux/slices/authSlice";
import { setStep } from "../../../redux/slices/forgotPasswordSlice";
import Link from "next/link";
import ForgotPasswordModal from "../ForgotPassword/ForgotPasswordModal";
import GoogleIcon from "@/assets/svg/GoogleIcon";
import AppleIcon from "@/assets/svg/AppleIcon";
import FacebookIcon from "@/assets/svg/FacebookIcon";
import { LoginUser } from "@/api/authApi";
import { useRouter } from 'next/navigation';
import Button from "@/components/ui/Button/Button";
import Image from "next/image";

const Login = ({ setIsLoggedIn }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.auth.isOpen);
  const email = useSelector((state) => state.auth.email);
  const modalRef = useRef();

  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal());
        setTimeout(() => {
          setModalOpen(false);
        }, 0);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await LoginUser(email, password);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user_id", data.id);

      setIsLoggedIn(true);
      dispatch(closeModal());
      setTimeout(() => {
        router.push("/");
      }, 0);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPasswordClick = () => {
    dispatch(setStep(1));
    setModalOpen(true);
  };

  return (
    <div>
      {isOpen && (
        <div className="loginContainer">
          <div className="login" ref={modalRef}>
            <Image src={Logo} width={1000} height={1000} alt="logo" />

            {!isModalOpen ? (
              <main className="login-main">
                <div className="top">
                  <button className="loginWith">
                    <GoogleIcon />
                    Google ilə daxil olun
                  </button>
                  <button className="loginWith">
                    <AppleIcon />
                    Apple ilə daxil olun
                  </button>
                  <button className="loginWith">
                    <FacebookIcon />
                    Facebook ilə daxil olun
                  </button>
                </div>

                <p className="or">və ya e-poçt vasitəsilə</p>

                <form className="form" onSubmit={handleSubmit}>
                  <EmailInput email={email} setEmail={(value) => dispatch(setEmail(value))}/>
                  <PasswordInput password={password} setPassword={setPassword} placeholder="Şifrə" />
                  <button
                    onClick={handleForgotPasswordClick}
                    className="forgotPass"
                  >
                    Şifrənizi unutmusuz?
                  </button>

                  <Button text="Daxil olun" />
                </form>

                {error && <p className="errorMessage">{error}</p>}

                <div className="fowardReg">
                  <p>
                    Hesabınız yoxdur?{" "}
                    <Link href="#" className="createAcc">
                      Hesab yaradın
                    </Link>
                  </p>
                </div>
              </main>
            ) : (
              <ForgotPasswordModal isOpen={isModalOpen} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;