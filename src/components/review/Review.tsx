import reviewstarhires from "../../assets/reviewstarhires.png";
import trustpilot from "../../assets/trustpilot.png";
import rev1 from "../../assets/rev1.png";
import rev2 from "../../assets/rev2.png";
import lr from "../../assets/lr.png";
import au from "../../assets/au.png";
import sk from "../../assets/sk.png";
import bm from "../../assets/bm.png";
import ja from "../../assets/ja.png";
import vw from "../../assets/vw.png";
import se from "../../assets/se.png";
const Review = () => {
  return (
    <div className="bg-[#1D232D]">
      <div className="container2">
        <div className="flex justify-between items-center pb-9 md:pb-[50px]">
          <h3 className="pt-[40px] pb-[25px] md:pt-[70px] md:pb-[30px] italic font-bold text-[24px] md:text-[34px] text-white uppercase">
            the love from our <br /> customers
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[#737F96] text-[16px] md:text-[12px] cursor-pointer">
              See All <br className="block md:hidden" /> Reviews
            </p>
            {smallArrowSVG}
          </div>
        </div>
        <div className="h-[191px] md:h-[291px] bg-[#1F2632] p-[25px] md:p-[50px] rounded-md relative">
          <div className="flex justify-between pb-5">
            <div className="flex items-center gap-1 md:gap-2">
              <h4 className="text-[12px] md:text-[24px] text-[#737F96] font-bold whitespace-nowrap text-ellipsis">
                Very Good
              </h4>
              <img
                className="md:w-[120px] w-[60px] h-[9px] md:h-[17px]"
                src={reviewstarhires}
                alt=""
              />
              <img
                className="pl-5 w-[100px] md:h-auto md:w-auto "
                src={trustpilot}
                alt=""
              />
            </div>
            <h4 className="text-[12px] md:text-[16px] text-[#737F96] font-bold whitespace-nowrap text-ellipsis">
              4 days ago
            </h4>
          </div>
          <h3 className="text-white italic text-[14px] md:text-[23px]">
            “Awesome service, next day delivery, friendly staff that know their
            stuff. Reassured support is always available should it be needed. It
            was like dealing with someone you’ve known 20 years.”
          </h3>
          <div className="absolute -bottom-12 left-2 md:left-12">{commentAngleSVG}</div>
        </div>
        {/* ?box of reviews  */}
        <div className="flex mt-14 gap-16 justify-between overflow-x-auto pb-[90px]">
          <div className="w-[390px] h-[84px] pr-10 ">
            <div className="flex gap-5">
              <img className="rounded-full h-[84px] w-[84px]" src={rev1} alt="" />
              <div className="">
                <h3 className="font-semibold text-[24px] text-white uppercase text-ellipsis whitespace-nowrap">Paul l</h3>
                <p className="text-[#737F96] text-[16px]">
                  Creative Director at{" "}
                  <span className="text-[#0099CC]">CompanyName</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[84px] pr-10 opacity-35 ">
            <div className="flex gap-5">
              <img className="rounded-full h-[84px] w-[84px]" src={rev2} alt="" />
              <div className="">
                <h3 className="font-semibold text-[24px] text-white uppercase text-ellipsis whitespace-nowrap">David G</h3>
                <p className="text-[#737F96] text-[16px]">
                  Creative Director at{" "}
                  <span className="text-[#0099CC]">CompanyName</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[390px] h-[84px] opacity-35 ">
            <div className="flex gap-5">
              <img className="rounded-full h-[84px] w-[84px]" src={rev1} alt="" />
              <div className="">
                <h3 className="font-semibold text-[24px] text-white uppercase text-ellipsis whitespace-nowrap">Lee W</h3>
                <p className="text-[#737F96] text-[16px]">
                  Creative Director at{" "}
                  <span className="text-[#0099CC]">CompanyName</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full downshadow h-1 hidden md:block"></div>
        <div className="flex gap-[118px] py-[70px] overflow-x-scroll md:overflow-x-hidden md:justify-between">
         <img src={vw} alt="" />
         <img src={au} alt="" />
         <img src={bm} alt="" />
         <img src={ja} alt="" />
         <img src={se} alt="" />
         <img src={sk} alt="" />
         <img src={lr} alt="" />
        </div>
      </div>
      <div className="w-full downshadow h-1 md:hidden block"></div>
    </div>
  );
};

export default Review;

const smallArrowSVG = (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66853 5.19078L1.91713 0.338513C1.81296 0.231249 1.68902 0.146112 1.55246 0.0880123C1.4159 0.0299124 1.26943 0 1.1215 0C0.973565 0 0.827095 0.0299124 0.690538 0.0880123C0.553981 0.146112 0.430041 0.231249 0.325865 0.338513C0.11715 0.552931 0 0.842982 0 1.14532C0 1.44765 0.11715 1.7377 0.325865 1.95212L4.29283 6.00331L0.325865 10.0545C0.11715 10.2689 0 10.559 0 10.8613C0 11.1636 0.11715 11.4537 0.325865 11.6681C0.430575 11.7742 0.554757 11.8581 0.69129 11.915C0.827822 11.972 0.97402 12.0009 1.1215 12C1.26898 12.0009 1.41518 11.972 1.55171 11.915C1.68824 11.8581 1.81242 11.7742 1.91713 11.6681L6.66853 6.81583C6.77356 6.70945 6.85693 6.58288 6.91382 6.44342C6.97071 6.30396 7 6.15438 7 6.00331C7 5.85223 6.97071 5.70265 6.91382 5.5632C6.85693 5.42374 6.77356 5.29717 6.66853 5.19078Z"
      fill="#737F96"
    />
  </svg>
);

const commentAngleSVG = (
  <svg
    width="46"
    height="53"
    viewBox="0 0 46 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_71_56)">
      <path d="M9 4H39L23.5 17L9 41V4Z" fill="#1F2632" />
    </g>
    <defs>
      <filter
        id="filter0_d_71_56"
        x="0"
        y="0"
        width="46"
        height="53"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.261562 0 0 0 0 0.274156 0 0 0 0 0.3875 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_71_56"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_71_56"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
