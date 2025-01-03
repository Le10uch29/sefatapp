"use client";
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import styles from './ProfileDropdown.module.scss';

const ProfileDropdown = ({ setIsLoggedIn }) => {
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_id");

    setIsLoggedIn(false);
    router.push("/");
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <div className={styles.dropdownContent}>
        <a href="#" onClick={handleLinkClick}>Rezervasiyalarım</a>
        <a href="#" onClick={handleLinkClick}>Analiz Neticelerim</a>
        <a href="#" onClick={handleLinkClick}>Reseptlerim</a>
        <a href="#" onClick={handleLinkClick}>Parametrler</a>
        <a href="#" onClick={handleLinkClick}>Rey Bildirdiklerim</a>
        <a href="#" onClick={handleLinkClick}>Favoritlerim</a>
        <a href="#" onClick={handleLinkClick}>Sifarişlerim</a>
        <a onClick={handleLogout}>Çıxış Et</a>
      </div>
    </div>
  );
};

export default ProfileDropdown;
