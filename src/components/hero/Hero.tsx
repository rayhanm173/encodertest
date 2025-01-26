import heroimg from "../../assets/topdonelite2.png";
import deliverycar from "../../assets/delivcar.png";
import reviewstar from "../../assets/reviewstar.png";
import paylater from "../../assets/paylater.png";
import foundcheaper from "../../assets/foundcheaper.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="herobg relative text-[#FFFFFF]">
      <div className="hidden md:flex justify-center gap-[60px] pt-3 text-[14px] container">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={deliverycar} alt="Free Delivery" />
          <p className="whitespace-nowrap text-ellipsis">Free Delivery</p>
        </div>
        <p className="whitespace-nowrap text-ellipsis cursor-pointer">
          iCarsoft UK Authorised Dealer
        </p>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={reviewstar} alt="Rated Excellent" />
          <p className="whitespace-nowrap text-ellipsis pt-1">
            Rated Excellent
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={paylater} alt="Buy Now, Pay Later" />
          <p className="whitespace-nowrap text-ellipsis">Buy Now, Pay Later</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={foundcheaper} alt="Found it Cheaper?" />
          <p className="whitespace-nowrap text-ellipsis">Found it Cheaper?</p>
        </div>
      </div>
      <div className="flex h-full items-center justify-center container gap-3 md:gap-16 md:pt-10 px-5 py-7 md:px-0 md:py-0">
        <div className="flex flex-col gap-1 md:gap-3 max-w-[540px]">
          <h1 className="font-semibold text-[14px] md:text-[32px]">TOPDON Phoenix Elite</h1>
          <p className="font-normal text-[10px] md:text-[16px]">
            TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the
            cost. If you don’t need the online programming capabilities<span className="hidden md:block">you may
            want to consider the PHOENIX LITE 2 which offers excellent value for money.</span>
          </p>
          <button className="text-[12px] md:text-[16px] w-[110px] md:w-[160px] md:h-[50px] h-[35px] mt-4 rounded-md text-[#838896] hover:text-[#fff] bg-[#282E3A] hover:bg-[#EA4C49] flex justify-center items-center">
            Learn More{" "}
          </button>
        </div>
        <img className="max-w-[149px] md:max-w-[492px]" src={heroimg} alt="" />
      </div>
      <div className="hidden md:block md:absolute bottom-[46%] translate-y-[50%]  left-40 cursor-pointer">
        {leftarrSVG}
      </div>
      <div className="hidden md:block md:absolute bottom-[46%] translate-y-[50%]  right-40 cursor-pointer">
        {rightarrSVG}
      </div>
      <div className="absolute bottom-3 md:bottom-5 translate-x-[50%] right-[50%] cursor-pointer flex justify-center gap-1">
        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-red-500"></div>{" "}
        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-slate-400"></div>{" "}
        <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-slate-400"></div>{" "}
      </div>
    </div>
  );
};

export default Hero;

const leftarrSVG = (
  <svg
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.437 29.8804L15.5642 20.0978L14.355 21.1412L22.2277 30.9239L23.437 29.8804Z"
      fill="#253146"
    />
    <path
      d="M22.2261 30.9239L14.3534 21.1413C13.681 20.3065 14.8903 19.263 15.5626 20.0978L23.4353 29.8804C24.1077 30.7152 22.8984 31.7587 22.2261 30.9239Z"
      fill="#253146"
    />
    <path
      d="M22.2277 10.3152L14.355 20.0978L15.5642 21.1413L23.437 11.3587L22.2277 10.3152Z"
      fill="#253146"
    />
    <path
      d="M23.4353 11.3586L15.5626 21.1413C14.8903 21.976 13.681 20.9326 14.3534 20.0978L22.2261 10.3152C22.8984 9.48038 24.1077 10.5239 23.4353 11.3586Z"
      fill="#253146"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.6818 39.3696C29.6818 39.3696 37.7891 30.9744 37.7891 20.6195C37.7891 10.2646 29.6818 1.86951 19.6818 1.86951C9.68188 1.86951 1.57455 10.2646 1.57455 20.6195C1.57455 30.9744 9.68188 39.3696 19.6818 39.3696ZM19.6818 41C30.5525 41 39.3636 31.8761 39.3636 20.6195C39.3636 9.363 30.5525 0.239075 19.6818 0.239075C8.81116 0.239075 0 9.363 0 20.6195C0 31.8761 8.81116 41 19.6818 41Z"
      fill="#253146"
    />
  </svg>
);

const rightarrSVG = (
  <svg
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.563 11.3587L24.4358 21.1413L25.645 20.0978L17.7723 10.3152L16.563 11.3587Z"
      fill="white"
      fill-opacity="0.8"
    />
    <path
      d="M17.774 10.3152L25.6468 20.0978C26.3191 20.9326 25.1099 21.976 24.4375 21.1413L16.5648 11.3586C15.8925 10.5239 17.1017 9.48038 17.774 10.3152Z"
      fill="white"
      fill-opacity="0.8"
    />
    <path
      d="M17.7723 30.9239L25.645 21.1413L24.4358 20.0978L16.563 29.8804L17.7723 30.9239Z"
      fill="white"
      fill-opacity="0.8"
    />
    <path
      d="M16.5648 29.8804L24.4375 20.0978C25.1099 19.263 26.3191 20.3065 25.6468 21.1413L17.774 30.9239C17.1017 31.7587 15.8925 30.7152 16.5648 29.8804Z"
      fill="white"
      fill-opacity="0.8"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.3182 1.86951C10.3182 1.86951 2.21091 10.2646 2.21091 20.6195C2.21091 30.9744 10.3182 39.3696 20.3182 39.3696C30.3181 39.3696 38.4255 30.9744 38.4255 20.6195C38.4255 10.2646 30.3181 1.86951 20.3182 1.86951ZM20.3182 0.239079C9.44752 0.239079 0.636364 9.363 0.636364 20.6195C0.636364 31.8761 9.44752 41 20.3182 41C31.1888 41 40 31.8761 40 20.6195C40 9.363 31.1888 0.239079 20.3182 0.239079Z"
      fill="white"
      fill-opacity="0.8"
    />
  </svg>
);
