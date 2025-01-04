import Link from "next/link";
import style from "./_titleCards.module.scss";

const TitleCards = ({ children, slug }) => {
  return (

    <div className={style.title}>
      <h2>{children}</h2>
      <div className={style.links}>
        <Link href={`${slug}`}>
        Hamsını göstər{" "}
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.45397 14.4245L15.3842 8.0001M15.3842 8.0001L9.45397 1.57568M15.3842 8.0001H1.46463"
              stroke="#226D64"
              strokeWidth="2.56977"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TitleCards;
