"use client";
import Link from "next/link";
import style from "./_Header.module.scss";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/slices/authSlice';
import Login from "../LoginModal/Login";
import ProfileIcon from "@/assets/svg/ProfileIcon";
import BagesIcon from "@/assets/svg/BagesIcon";
import LangIcon from "@/assets/svg/LangIcon";
import ProfileDropdown from "../LoginModal/ProfileDropdown/ProfileDropdown";
import { useEffect, useState } from "react";
import Search from "./Search";

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const userId = localStorage.getItem("user_id");
    setIsLoggedIn(!!(token && userId));
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      setDropdownOpen((prev) => !prev);
    } else {
      dispatch(openModal());
    }
  };

  const Logo = "/images/Component3.png";

  return (
    <nav className={style.nav}>
      <header className={style.header}>
        <div className="container">
          <div className={style.flexbl}>
            <div className={style.logo}>
              <Link href="/">
                <Image src={Logo} width={1000} height={1000} alt="logo" />
              </Link>
            </div>
            <nav className={style.menu}>
              <ul className={style.menuList}>
                <li className={style.list}>
                  <Link href="/" className={style.menuLink}>Ana Səhifə</Link>
                </li>
                <li className={style.list}>
                  <Link href="/About" className={style.menuLink}>Haqqımızda</Link>
                </li>
                <li className={style.list}>
                  <Link href="/doctors" className={style.menuLink}>Həkimlər</Link>
                </li>
                <li className={style.list}>
                  <Link href="/clinics" className={style.menuLink}>Klinikalar</Link>
                </li>
                <li className={style.list}>
                  <Link href="/pharmacies" className={style.menuLink}>Apteklər</Link>
                </li>
                <li className={style.list}>
                  <Link href="/blogs" className={style.menuLink}>Bloq</Link>
                </li>
                <li className={style.list}>
                  <Link href="/contact" className={style.menuLink}>Əlaqə</Link>
                </li>
              </ul>
            </nav>
            <div className={style.icons}>
              <Search />
              <div className={`${style.bages} ${style.items}`}>
                <Link href="/basket" className={`${style.iconLinks} ${style.bagesLink}`}>
                  <BagesIcon />
                </Link>
              </div>
              <button className={`${style.register} ${style.items}`} onClick={handleProfileClick}>
                <div className={`${style.iconLinks} ${style.registerLink}`}>
                  <ProfileIcon />
                </div>
              </button>
              <div className={`${style.lang} ${style.items}`}>
                <Link href="#" className={`${style.iconLinks} ${style.langLink}`}>
                  <LangIcon />
                  AZ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isLoggedIn ? (
        isDropdownOpen && <ProfileDropdown setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </nav>
  );
};

export default Header;

