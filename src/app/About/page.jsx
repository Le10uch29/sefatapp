import React from "react";
import "./index.css";
import Image from "next/image";
import aboutImage from "@/assets/womans.png";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
const About = () => {
  return (
    <div className="aboutContainer">
      <Header />
      <div className="subHead">
        <h1 className="bannerText">Haqqımızda</h1>
      </div>
      <div className="mainText">
        <div className="textBox">
          <Image src={aboutImage} width={395} height={513} />
          <div>
            <h2>Sizin sağlamlığınız üçün ən yaxşısı</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonialText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque felis vitae tortor augue. Velit nascetur Consequat
            faucibus porttitor enim et.
          </p>
          <hr />
          <p>John Doe</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
