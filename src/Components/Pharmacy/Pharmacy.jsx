import Image from "next/image";
import style from "./_Pharmacy.module.scss";
import Link from "next/link";
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


const Pharmacy = ({ item }) => {
  const { name, img, address, rank } = item;

  return (
    <>
      <div className={style.card}>
        <div className={style.cardItems}>
          <div className={style.image}>
            <Image width={1000} height={1000} src={img} alt="img" />
          </div>
          <div className={style.content}>
            <div className={style.pro}>
              <h3>{name}</h3>
            </div>
            <p>Address: {address}</p>
            <div className={style.rating_comment}>
              <span className={style.rating}>
                <Rating
                  value={rank}
                  precision={0.1}
                  readOnly
                  icon={<StarIcon sx={{ fontSize: 18, color: "#ffd557" }} />}
                  emptyIcon={<StarIcon sx={{ fontSize: 18 }} />}
                />
              </span>
              <span className={style.comment_count}>15 rəy</span>
            </div>
            <div className={style.reserv}>
              <Link href="#">
                Alış veriş et
                <svg
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L7.5 8L1.5 15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className={style.work}>
            <span>7/24</span>
          </div>
          <div className={style.favori}>
            <Link href="#">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14L6.84 13.0082C5.49333 11.851 4.38 10.8529 3.5 10.0136C2.62 9.17439 1.92 8.42098 1.4 7.75341C0.88 7.08583 0.516667 6.4723 0.31 5.91281C0.103333 5.35332 0 4.78111 0 4.19619C0 3.00091 0.42 2.00272 1.26 1.20163C2.1 0.400545 3.14667 0 4.4 0C5.09333 0 5.75333 0.139873 6.38 0.419619C7.00667 0.699364 7.54667 1.09355 8 1.60218C8.45333 1.09355 8.99333 0.699364 9.62 0.419619C10.2467 0.139873 10.9067 0 11.6 0C12.8533 0 13.9 0.400545 14.74 1.20163C15.58 2.00272 16 3.00091 16 4.19619C16 4.78111 15.8967 5.35332 15.69 5.91281C15.4833 6.4723 15.12 7.08583 14.6 7.75341C14.08 8.42098 13.38 9.17439 12.5 10.0136C11.62 10.8529 10.5067 11.851 9.16 13.0082L8 14ZM8 11.9401C9.28 10.8465 10.3333 9.90872 11.16 9.1267C11.9867 8.34469 12.64 7.6644 13.12 7.08583C13.6 6.50727 13.9333 5.99228 14.12 5.54087C14.3067 5.08946 14.4 4.64124 14.4 4.19619C14.4 3.43324 14.1333 2.79746 13.6 2.28883C13.0667 1.7802 12.4 1.52589 11.6 1.52589C10.9733 1.52589 10.3933 1.69437 9.86 2.03134C9.32667 2.3683 8.96 2.79746 8.76 3.3188H7.24C7.04 2.79746 6.67333 2.3683 6.14 2.03134C5.60667 1.69437 5.02667 1.52589 4.4 1.52589C3.6 1.52589 2.93333 1.7802 2.4 2.28883C1.86667 2.79746 1.6 3.43324 1.6 4.19619C1.6 4.64124 1.69333 5.08946 1.88 5.54087C2.06667 5.99228 2.4 6.50727 2.88 7.08583C3.36 7.6644 4.01333 8.34469 4.84 9.1267C5.66667 9.90872 6.72 10.8465 8 11.9401Z"
                  fill="#0C2623"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
