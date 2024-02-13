import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 30000,
        
         appendDots: (dots) => (
          <div>
             <ul className="container w-full items-end flex-end text-end">{dots}</ul>
          </div>
        ),
        customPaging: (i) => (
          <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
        ),
      };
    
  return (
    <div className="h-screen w-full -mt-[88px]">
     <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full ">
          <Image
            src="/images/1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          

          <Slider {...settings}>
        <div  >
        <div className="mt-48 flex-end mx-12 text-black font-bold font-large flex flex-col items-end gap-y-3 ">
            <Title addClass="text-8xl flex-end  items-end font-bold">Fast Food Restaurant</Title>
            <p className="text-2xl">
            Restaurantımızda lezzetli fast foodlar bulunmaktadır.
            </p>
            <button className="btn-primary    items-start flex-start " >Sipariş Ver</button>
          </div>

        </div>
        <div>
          
        <div className="mt-48 flex-end   mx-24  text-black font-bold font-large flex flex-col items-end gap-y-3 ">
            <Title addClass="text-8xl flex-end items-end font-bold">Fast Food Restaurant</Title>
            <p className="text-2xl">
            Restaurantımızda lezzetli fast foodlar bulunmaktadır.
            </p>
            <button className="btn-primary    items-start flex-start  " >Sipariş Ver</button>
          </div>

        </div>
      </Slider>



        </div>
      </div>

    </div>
  );
};

export default Carousel;