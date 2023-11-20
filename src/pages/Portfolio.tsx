import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

import { Link } from "react-router-dom";

const Portfolio = () => {
  const images = [Image1, Image2, Image3, Image4];

  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">About me</h1>
            <div className="mb-12 flex flex-col gap-9 max-w-sm">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                atque odit hic, fugit autem alias molestias veniam
                necessitatibus ea ut.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                atque odit hic, fugit autem alias molestias veniam
                necessitatibus ea ut.
              </p>
            </div>
            <Link to={"/contact "} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </div>
          {/* images */}
          <div className="grid grid-cols-2 lg:gap-2">
            {images.map((image, index) => (
              <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="h-full object-cover lg:h-[220px] hover:scale-105 transition-all duration-500 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
