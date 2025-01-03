// components/ui/Button/SeconadryButton.js
import styles from './Button.module.scss';
import Arrow from '../../../../public/images/Arrow.png'
import Image from 'next/image';

function SecondaryButton({ text,onClick }) {
  return (


    <button className={styles.btn} onClick={onClick}>Xidmətlər 
    <Image className={styles.icon} src={Arrow} width={1000} height={1000} alt='arrow' priority /></button>

  );
}

export default SecondaryButton;
