import { useState } from "react";

const MegaMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    { title: "OBDeleven", links: [] },
    { title: "Scanner Types", links: [] },
    { title: "Car Makes", links: [] },
    {
      title: "Service Reset Tools",
      links: [
        "ABS Brake Bleeding Scan Tools",
        "Adaptive Front Lighting System (AFS) Tools",
        "Fuel Adjustment Tools",
        "Air Suspension Diagnostic Tools",
        "Airbag Reset Tools",
        "Automatic Transmission (AT) Adaption Diagnostic Tools",
        "Car Battery Registration Tools",
        "Car Language Change Tools",
        "Change Tyre Size Diagnostic Tools",
        "Clutch Adaption Tools",
        "Diesel Particulate Filter (DPF) Reset Tools",
        "EGR Reset",
        "Electronic Parking Brake Reset (EPB) Tools",
        "EVAP Test and Scan Tools",
        "Gearbox Matching Tools",
        "Immobilizer Reset Tools",
        "Headlights Testers",
        "Injector Coding Tools and Scanners",
        "Odometer Diagnostic Tools",
        "Oil Service Reset Tools",
        "Prime Fuel Pump Diagnostic Tools",
        "Seat Match Diagnostic Tools",
        "Steering Angle Sensor Reset Tools",
        "Sun Roof Diagnostic Tools",
        "TCM Oil Reset Tools",
        "Throttle Position Sensor Adjustment Tools",
        "Tooth/Gear Learning Diagnostic Tools",
        "Car Turbo Diagnostic Tools",
        "Tyre Pressure Sensor Tools",
        "Car Window/Door Diagnostic Tools",
      ],
    },
    { title: "Other Tools & Accessories", links: [] },
  ];

  return (
    <nav className="bg-[#1F242D] text-[#CCCCCC] p-4 text-[17px] font-[600] relative hidden md:block">
      <div className="container flex justify-center relative">
        <ul className="flex gap-10">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <div
                className="cursor-pointer font-medium flex items-center gap-1"
                onClick={() => handleMenuClick(index)}
              >
                {item.title} {item.links.length > 0 && downSVG}
              </div>
              {item.links.length > 0 && activeIndex === index && (
                <div  className="absolute left-0 top-full w-full overflow-hidden h-[526px] bg-gray-800 shadow-lg z-10">
                  <ul className="p-4 gap-[5px] menugrid container">
                    {item.links.map((link, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-gray-700 px-4 py-2 rounded cursor-pointer text-[17px] font-[400] flex gap-.5"
                      >
                        {rightArrowSVG}
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;

const downSVG = (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.76929 11.1148C5.50409 11.1148 5.24978 11.0094 5.06229 10.8218L0.819286 6.57984C0.637128 6.39124 0.536334 6.13864 0.538612 5.87644C0.54089 5.61425 0.64606 5.36343 0.831468 5.17802C1.01688 4.99262 1.26769 4.88745 1.52988 4.88517C1.79208 4.88289 2.04468 4.98369 2.23329 5.16584L5.76929 8.70084L9.30529 5.16584C9.49389 4.98369 9.74649 4.88289 10.0087 4.88517C10.2709 4.88745 10.5217 4.99262 10.7071 5.17802C10.8925 5.36343 10.9977 5.61425 11 5.87644C11.0022 6.13864 10.9014 6.39124 10.7193 6.57984L6.47629 10.8218C6.28879 11.0094 6.03448 11.1148 5.76929 11.1148Z"
      fill="#CCCCCC"
    />
  </svg>
);

const rightArrowSVG = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1633 11.2899L10.9233 7.04995C10.8304 6.95622 10.7198 6.88183 10.5979 6.83106C10.476 6.78029 10.3453 6.75415 10.2133 6.75415C10.0813 6.75415 9.9506 6.78029 9.82874 6.83106C9.70688 6.88183 9.59628 6.95622 9.50332 7.04995C9.31707 7.23731 9.21252 7.49076 9.21252 7.75495C9.21252 8.01913 9.31707 8.27259 9.50332 8.45995L13.0433 11.9999L9.50332 15.5399C9.31707 15.7273 9.21252 15.9808 9.21252 16.2449C9.21252 16.5091 9.31707 16.7626 9.50332 16.9499C9.59676 17.0426 9.70757 17.116 9.82941 17.1657C9.95125 17.2155 10.0817 17.2407 10.2133 17.2399C10.3449 17.2407 10.4754 17.2155 10.5972 17.1657C10.7191 17.116 10.8299 17.0426 10.9233 16.9499L15.1633 12.7099C15.257 12.617 15.3314 12.5064 15.3822 12.3845C15.433 12.2627 15.4591 12.132 15.4591 11.9999C15.4591 11.8679 15.433 11.7372 15.3822 11.6154C15.3314 11.4935 15.257 11.3829 15.1633 11.2899Z"
      fill="#CCCCCC"
    />
  </svg>
);
