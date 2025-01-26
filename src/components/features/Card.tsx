import { useState } from "react";
import featuredimage1 from "../../assets/featuredimage1.png";
import featuredimage2 from "../../assets/featuredimage2.png";
import featuredimage3 from "../../assets/featuredimage3.png";
import featuredimage4 from "../../assets/featuredimage4.png";
import saletag from "../../assets/saletag.png";
import newtag from "../../assets/newtag.png";
import soldtag from "../../assets/soldtag.png";
import reviewstar from "../../assets/reviewstar.png";
const Card = ({title,discPrice,price,tag,img}:any) => {
  const [hov, setHov] = useState(false);
  const [like, setLike] = useState(false);
  return (
    <div className="w-[277px] h-[574px] rounded-[15px] text-[#737F96] border-2 border-slate-800 relative">
      <img
        className={`w-[277px] h-[300px] rounded-t-[15px] hover:scale-105 duration-500 ${img==3&&'opacity-35'} `}
        src={img==1?featuredimage1:img==2?featuredimage2:img==3?featuredimage3:featuredimage4}
        alt=""
      />
      <div className="p-[25px]">
        <div className="flex items-center gap-2 pb-5 border-b border-slate-800">
          <p className="text-[14px] font-normal">Rating: </p>
          <img src={reviewstar} alt="" />
        </div>
        <p className="text-[14px] font-bold text-[#838896] py-5 border-b border-slate-800">
          {title}
        </p>
        <div className="flex items-center justify-center gap-3 h-[29px] my-[20px]">
          <span className="text-[19px] leading-[28px] font-semibold text-[#EA4C49] w-[64px] h-[29px]">
           {discPrice}
          </span>

          <span className="text-[16px] leading-[24px] font-normal text-[#737F96] line-through w-[54px] h-[24px]">
            {price}
          </span>

          <span className="text-[14px] leading-[24px] font-normal text-[#CCCCCC] w-[55px] h-[24px]">
            Inc. VAT
          </span>
        </div>
        <div
          onMouseLeave={() => setHov(false)}
          onMouseEnter={() => setHov(true)}
          className="cursor-pointer w-[227px] h-[44px] rounded-[30px] text-[#838896] hover:text-[#fff] bg-[#282E3A] hover:bg-[#EA4C49] flex justify-center items-center gap-1"
        >
          <ShowCartSVG hovered={hov} />
          <p className="text-[16px]">Add to Cart</p>{" "}
        </div>
      </div>
      <div
        onClick={() => setLike(!like)}
        className="cursor-pointer  absolute flex justify-center items-center top-2 left-2 h-[34px] w-[34px] rounded-md bg-[#253146]"
      >
        <ShowLikeSVG liked={like} />
      </div>
      {tag&&<img className="absolute top-2 right-2 max-w-[104px] max-h-[24px]" src={tag=='sale'?saletag:tag=='new'?newtag:soldtag} alt="" />}
    </div>
  );
};

export default Card;

const ShowCartSVG = ({ hovered }: any) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill={hovered ? "#ffffff" : "#737F96"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.75 16C17.2804 16 17.7891 16.2107 18.1642 16.5858C18.5393 16.9609 18.75 17.4696 18.75 18C18.75 18.5304 18.5393 19.0391 18.1642 19.4142C17.7891 19.7893 17.2804 20 16.75 20C16.2196 20 15.7109 19.7893 15.3358 19.4142C14.9607 19.0391 14.75 18.5304 14.75 18C14.75 16.89 15.64 16 16.75 16ZM0.75 0H4.02L4.96 2H19.75C20.0152 2 20.2696 2.10536 20.4571 2.29289C20.6446 2.48043 20.75 2.73478 20.75 3C20.75 3.17 20.7 3.34 20.63 3.5L17.05 9.97C16.71 10.58 16.05 11 15.3 11H7.85L6.95 12.63L6.92 12.75C6.92 12.8163 6.94634 12.8799 6.99322 12.9268C7.04011 12.9737 7.1037 13 7.17 13H18.75V15H6.75C6.21957 15 5.71086 14.7893 5.33579 14.4142C4.96071 14.0391 4.75 13.5304 4.75 13C4.75 12.65 4.84 12.32 4.99 12.04L6.35 9.59L2.75 2H0.75V0ZM6.75 16C7.28043 16 7.78914 16.2107 8.16421 16.5858C8.53929 16.9609 8.75 17.4696 8.75 18C8.75 18.5304 8.53929 19.0391 8.16421 19.4142C7.78914 19.7893 7.28043 20 6.75 20C6.21957 20 5.71086 19.7893 5.33579 19.4142C4.96071 19.0391 4.75 18.5304 4.75 18C4.75 16.89 5.64 16 6.75 16ZM15.75 9L18.53 4H5.89L8.25 9H15.75Z" />
    </svg>
  );
};
const ShowLikeSVG = ({ liked }: any) => {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill={liked ? "red" : "#fff"}
    >
      <path
        d="M15 0.164062C12.5 0.164062 11.2422 1.24219 10 2.66406C8.75781 1.24219 7.5 0.164062 5 0.164062C2.5 0.164062 0 1.83203 0 6.83203C0 9.33203 2.5 14.332 10 18.5C17.5 14.332 20 9.33203 20 6.83203C20 1.83203 17.5 0.164062 15 0.164062ZM10 16.5781C3.19141 12.5391 1.66797 8.20703 1.66797 6.83203C1.66797 4.55078 2.24609 1.83203 5 1.83203C6.75 1.83203 7.60156 2.45312 8.74609 3.76172L10 5.16406L11.2539 3.76172C12.3984 2.45312 13.25 1.83203 15 1.83203C17.7539 1.83203 18.332 4.55078 18.332 6.83203C18.332 8.20703 16.8086 12.5391 10 16.5781Z"
        
      />
    </svg>
  );
};

// const likeSVG = (
//   <svg
//     width="20"
//     height="19"
//     viewBox="0 0 20 19"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M15 0.164062C12.5 0.164062 11.2422 1.24219 10 2.66406C8.75781 1.24219 7.5 0.164062 5 0.164062C2.5 0.164062 0 1.83203 0 6.83203C0 9.33203 2.5 14.332 10 18.5C17.5 14.332 20 9.33203 20 6.83203C20 1.83203 17.5 0.164062 15 0.164062ZM10 16.5781C3.19141 12.5391 1.66797 8.20703 1.66797 6.83203C1.66797 4.55078 2.24609 1.83203 5 1.83203C6.75 1.83203 7.60156 2.45312 8.74609 3.76172L10 5.16406L11.2539 3.76172C12.3984 2.45312 13.25 1.83203 15 1.83203C17.7539 1.83203 18.332 4.55078 18.332 6.83203C18.332 8.20703 16.8086 12.5391 10 16.5781Z"
//       fill="white"
//     />
//   </svg>
// );



// const saleSVG=<svg width="58" height="21" viewBox="0 0 58 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
// <rect width="58" height="21" fill="url(#pattern0_57_207)"/>
// <path d="M19.424 15.098C18.7053 15.098 18.0613 14.9813 17.492 14.748C16.9227 14.5147 16.4653 14.1693 16.12 13.712C15.784 13.2547 15.6067 12.704 15.588 12.06H18.136C18.1733 12.424 18.2993 12.704 18.514 12.9C18.7287 13.0867 19.0087 13.18 19.354 13.18C19.7087 13.18 19.9887 13.1007 20.194 12.942C20.3993 12.774 20.502 12.5453 20.502 12.256C20.502 12.0133 20.418 11.8127 20.25 11.654C20.0913 11.4953 19.8907 11.3647 19.648 11.262C19.4147 11.1593 19.0787 11.0427 18.64 10.912C18.0053 10.716 17.4873 10.52 17.086 10.324C16.6847 10.128 16.3393 9.83867 16.05 9.456C15.7607 9.07333 15.616 8.574 15.616 7.958C15.616 7.04333 15.9473 6.32933 16.61 5.816C17.2727 5.29333 18.136 5.032 19.2 5.032C20.2827 5.032 21.1553 5.29333 21.818 5.816C22.4807 6.32933 22.8353 7.048 22.882 7.972H20.292C20.2733 7.65467 20.1567 7.40733 19.942 7.23C19.7273 7.04333 19.452 6.95 19.116 6.95C18.8267 6.95 18.5933 7.02933 18.416 7.188C18.2387 7.33733 18.15 7.55667 18.15 7.846C18.15 8.16333 18.2993 8.41067 18.598 8.588C18.8967 8.76533 19.3633 8.95667 19.998 9.162C20.6327 9.37667 21.146 9.582 21.538 9.778C21.9393 9.974 22.2847 10.2587 22.574 10.632C22.8633 11.0053 23.008 11.486 23.008 12.074C23.008 12.634 22.8633 13.1427 22.574 13.6C22.294 14.0573 21.8833 14.4213 21.342 14.692C20.8007 14.9627 20.1613 15.098 19.424 15.098ZM30.5993 13.264H26.9313L26.3433 15H23.8373L27.3933 5.172H30.1653L33.7213 15H31.1873L30.5993 13.264ZM29.9833 11.416L28.7653 7.818L27.5613 11.416H29.9833ZM37.1975 13.152H40.3335V15H34.8035V5.172H37.1975V13.152ZM43.8694 7.09V9.078H47.0754V10.926H43.8694V13.082H47.4954V15H41.4754V5.172H47.4954V7.09H43.8694Z" fill="white"/>
// <defs>
// <pattern id="pattern0_57_207" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use transform="scale(0.0172414 0.047619)"/>
// </pattern>
// <image id="image0_57_207" width="58" height="21"/>
// </defs>
// </svg>
