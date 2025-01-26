import logo from "../../assets/albionshire.png";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import american from "../../assets/american.png";
import paypal from "../../assets/pay.png";
import visa2 from "../../assets/visa2.png";
import { Socials } from "../topnav/TopNav";
const Footer = () => {
  return (
    <div className="footerbg text-[#ccc]">
      <div className="container2 pt-[30px] pb-[27px] md:pt-[71px] md:pb-[61px]">
        <div className="flex justify-between flex-wrap  gap-[30px] md:gap-[99px]">
          <div className="flex flex-col gap-6 md:max-w-[22%]">
            <img className="w-[249px] h-[70px]" src={logo} alt="" />
            <p className="text-[#CCCCCC] font-normal text-[15px]">
              When you need the best auto parts for your ride, turn to Autovio.
              Limited time offer for only new customer also get free shipping on
              orders.
            </p>
            <Socials />
          </div>
          <div className="md:max-w-[22%]">
            <h3 className="mb-[25px] font-bold text-[21px] uppercase text-white">
              Our company
            </h3>
            <div className="flex flex-col gap-[15px]">
              <p className="font-normal text-[16px]">Delivery</p>
              <p className="font-normal text-[16px]">Legal Notice</p>
              <p className="font-normal text-[16px]">Secure payment</p>
              <p className="font-normal text-[16px]">Contact us</p>
              <p className="font-normal text-[16px]">About us</p>
              <p className="font-normal text-[16px]">Stores</p>
            </div>
          </div>
          <div className="md:max-w-[22%]">
            <h3 className="mb-[25px] font-bold text-[21px] uppercase text-white">
              Our Services
            </h3>
            <div className="flex flex-col gap-[15px]">
              <p className="font-normal text-[16px]">Car Diagnostic Tools</p>
              <p className="font-normal text-[16px]">Hand-held Scanners</p>
              <p className="font-normal text-[16px]">
                Universal Car Diagnostic
              </p>
              <p className="font-normal text-[16px]">Audi Diagnostic</p>
              <p className="font-normal text-[16px]">ABS Brake Bleeding</p>
              <p className="font-normal text-[16px]">
                Adaptive Front Lighting System
              </p>
            </div>
          </div>
          <div className="md:max-w-[22%]">
            <h3 className="mb-[25px] font-bold text-[21px] uppercase text-white">
              Contact Us
            </h3>
            <div className="flex flex-col gap-[15px]">
              <p className="font-normal text-[16px]">
                <span className="text-[#EA4C49]">Address: </span> 126 Horton
                Grange Road, Bradford, West Yorkshire, BD7 2DW
              </p>
              <p className="font-normal text-[16px]">
                <span className="text-[#EA4C49]">Phone : </span> +1 86.36.166
              </p>
              <p className="font-normal text-[16px]">
                <span className="text-[#EA4C49]"> Fax : </span>12345
              </p>
              <p className="font-normal text-[16px]">
                <span className="text-[#EA4C49]">Mail :  </span> contact@abc.co.uk
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr  className="text-slate-800"/>
      <div className="container2 flex flex-wrap justify-center gap-2 md:justify-between items-center py-5">
         <p className="font-normal text-[15px]">Copyright © 2024 <span className="text-[#EA4C49]"> abc</span> - All Rights Reserved.</p>
         <div className="flex gap-2 -order-1 md:order-2 ">
            <img className="" src={visa} alt="" />
            <img className="" src={master} alt="" />
            <img className="" src={paypal} alt="" />
            <img className="" src={american} alt="" />
            <img className="" src={visa2} alt="" />
         </div>
      </div>
    </div>
  );
};

export default Footer;
