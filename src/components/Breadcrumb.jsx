import { Link, useLocation } from "react-router-dom";
import SlashImg from "../assets/react.svg"

export default function Breadcrumb() {
  const location = useLocation();
  const currentLocation = location.pathname
  console.log("location <>", location)

  return (
    <div className="bg-white ">
      <ul className=" flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link to={"homepage"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md ${currentLocation == "/homepage" && "bg-[#b572d6] text-white"}`}>
          HomePage
        </Link>
        {/* <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link to={"products"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300 ${currentLocation == "/products"&& "bg-[#b572d6] text-white"}`}>
          Products
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link to={"about"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300 ${currentLocation == "/about"&& "bg-[#b572d6] text-white"}`}>
          About
        </Link>
        <img src={SlashImg} className="w-5 h-5 " alt="" />
        <Link to={"faq"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300 ${currentLocation == "/faq"&& "bg-[#b572d6] text-white"}`}>
          FAQ
        </Link> */}
        {
          location.pathname.includes('/products') && (
            <>
              <img src={SlashImg} className="w-5 h-5 " alt="" />
              <Link to={"products"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300 ${currentLocation.includes("/products") && "bg-[#b572d6] text-white"} ${currentLocation.includes("/products/") && "bg-[#E8DAEF] text-white"}`}>
                Products
              </Link>
            </>
            
          )
        }
        {
          location.pathname.includes('/products/') && (
            <>
              <img src={SlashImg} className="w-5 h-5 " alt="" />
              <Link to={"products/1"} className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300 ${currentLocation.includes("/products/") && "bg-[#b594d3] text-white"}`}>
                Single Products
              </Link>
            </>
            
          )
        }
      </ul>
    </div>
  );
}

