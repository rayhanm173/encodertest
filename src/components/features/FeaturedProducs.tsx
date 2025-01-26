import { useState } from "react";
import Card from "./Card";

const FeaturedProducs = () => {
  const [activeItem, setActiveItem] = useState("All");
  const menuItems = [
    "All",
    "Special",
    "Popular",
    "New/Used",
    "Certified",
    "See All Products",
  ];
  const items = [
    {
      title: "VDubDiag for VW Audi Skoda Seat",
      discPrice: "£79.99",
      price: "£89.99",
      tag: "sale",
      img:1
    },
    {
      title: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN...",
      discPrice: "£89.99",
      price: "£129.99",
      tag: "new",
      img:2
    },
    {
      title: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner...",
      discPrice: "£114.99",
      price: "£119.99",
      tag: "sold",
      img:3
    },
    {
      title: "iCarsoft CR MAX – 2024 Full System All Makes...",
      discPrice: "£349.99",
      price: "£429.99",
      img:4
    },
  ];
  return (
    <div className="">
      <div className="pt-[40px] pb-[25px] md:pt-[70px] md:pb-[30px] italic font-bold text-[29px] md:text-[34px] text-white">
        Featured Products
      </div>
      <div className="max-w-[90%] md:max-w-auto overflow-auto">
        <div className="w-full max-w-[1200px] flex items-start justify-between">
          {/* Menu Items */}
          <div className="flex mb-[35px] md:mb-[50px]">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-2 text-[16px] font-medium rounded-md transition-colors duration-200
              ${
                item === "See All Products"
                  ? "text-gray-500 whitespace-nowrap"
                  : item === activeItem
                  ? "bg-[#EA4C49] text-white"
                  : "text-white"
              }
              `}
              >
                <div className="flex items-center gap-1">
                  {item}
                  {index == 5 && arrowSVG}
                </div>
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-2">
            <button className="hidden md:block">{outlinedLeftSVG}</button>
            <button className="hidden md:block">{outlinedRightSVG}</button>
          </div>
        </div>
      </div>
      <div className="flex md:justify-between overflow-x-auto md:overflow-hidden gap-[30px]">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            discPrice={item.discPrice}
            price={item.price}
            tag={item.tag}
            img={item.img}
          />
        ))}
      </div>
      <div className="mt-5 flex gap-1 justify-center">
            <button className="md:hidden block">{outlinedLeftSVG}</button>
            <button className="md:hidden block">{outlinedRightSVG}</button>
          </div>
    </div>
  );
};

export default FeaturedProducs;

const arrowSVG = (
  <svg
    width="7"
    height="13"
    viewBox="0 0 7 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66853 5.69078L1.91713 0.838513C1.81296 0.731249 1.68902 0.646112 1.55246 0.588012C1.4159 0.529912 1.26943 0.5 1.1215 0.5C0.973565 0.5 0.827095 0.529912 0.690538 0.588012C0.553981 0.646112 0.430041 0.731249 0.325865 0.838513C0.11715 1.05293 0 1.34298 0 1.64532C0 1.94765 0.11715 2.2377 0.325865 2.45212L4.29283 6.50331L0.325865 10.5545C0.11715 10.7689 0 11.059 0 11.3613C0 11.6636 0.11715 11.9537 0.325865 12.1681C0.430575 12.2742 0.554757 12.3581 0.69129 12.415C0.827822 12.472 0.97402 12.5009 1.1215 12.5C1.26898 12.5009 1.41518 12.472 1.55171 12.415C1.68824 12.3581 1.81242 12.2742 1.91713 12.1681L6.66853 7.31583C6.77356 7.20945 6.85693 7.08288 6.91382 6.94342C6.97071 6.80396 7 6.65438 7 6.50331C7 6.35223 6.97071 6.20265 6.91382 6.0632C6.85693 5.92374 6.77356 5.79717 6.66853 5.69078Z"
      fill="#737F96"
    />
  </svg>
);

const outlinedLeftSVG = (
  <svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="28" height="27" rx="5" fill="#253146" />
    <path
      d="M13.0939 13.4727L17.6276 9.10476C17.8661 8.87358 18 8.56085 18 8.23487C18 7.9089 17.8661 7.59617 17.6276 7.36498C17.5085 7.24933 17.3669 7.15754 17.2108 7.09489C17.0547 7.03225 16.8874 7 16.7183 7C16.5492 7 16.3818 7.03225 16.2258 7.09489C16.0697 7.15754 15.928 7.24933 15.809 7.36498L10.3788 12.5967C10.2588 12.7114 10.1635 12.8478 10.0985 12.9982C10.0335 13.1486 10 13.3098 10 13.4727C10 13.6356 10.0335 13.7969 10.0985 13.9472C10.1635 14.0976 10.2588 14.2341 10.3788 14.3488L15.809 19.6422C15.9287 19.7565 16.0706 19.847 16.2266 19.9084C16.3827 19.9698 16.5497 20.0009 16.7183 20C16.8868 20.0009 17.0539 19.9698 17.21 19.9084C17.366 19.847 17.5079 19.7565 17.6276 19.6422C17.8661 19.411 18 19.0982 18 18.7723C18 18.4463 17.8661 18.1336 17.6276 17.9024L13.0939 13.4727Z"
      fill="white"
    />
  </svg>
);
const outlinedRightSVG = (
  <svg
    width="28"
    height="27"
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="28"
      y="27"
      width="28"
      height="27"
      rx="5"
      transform="rotate(180 28 27)"
      fill="#253146"
    />
    <path
      d="M14.9061 13.5273L10.3724 17.8952C10.1339 18.1264 10 18.4392 10 18.7651C10 19.0911 10.1339 19.4038 10.3724 19.635C10.4915 19.7507 10.6331 19.8425 10.7892 19.9051C10.9453 19.9677 11.1126 20 11.2817 20C11.4508 20 11.6182 19.9677 11.7742 19.9051C11.9303 19.8425 12.072 19.7507 12.191 19.635L17.6212 14.4033C17.7412 14.2886 17.8365 14.1522 17.9015 14.0018C17.9665 13.8514 18 13.6902 18 13.5273C18 13.3644 17.9665 13.2031 17.9015 13.0528C17.8365 12.9024 17.7412 12.7659 17.6212 12.6512L12.191 7.35785C12.0713 7.24349 11.9294 7.15302 11.7734 7.09161C11.6173 7.03021 11.4503 6.99908 11.2817 7.00002C11.1132 6.99908 10.9461 7.03021 10.79 7.09161C10.634 7.15302 10.4921 7.24349 10.3724 7.35785C10.1339 7.58903 10 7.90176 10 8.22774C10 8.55372 10.1339 8.86645 10.3724 9.09763L14.9061 13.5273Z"
      fill="white"
    />
  </svg>
);
