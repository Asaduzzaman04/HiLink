import Link from "next/link";
import Image from "next/image";
import HinikLogo from "@/public/hilink-logo.svg";
import UserLogo from "@/public/user.svg";
import Button from "./Button";
import SmallDeviceNavbar from "@/components/smallDeviceNavlinks";
import LargeDeviceNavLinks from "@/components/LargeDeviceNavLinks";

const Navbar = () => {
  return (
      <nav className=" flex  justify-between  lg:justify-around  items-center px-5 lg:px-0 py-5">
          {/* Logo */}
          <Link href="/" passHref>
              <Image src={HinikLogo} alt="Hilink Logo" width={120} height={40}/>
          </Link>

          {/* Navigation Links large device */}
          <LargeDeviceNavLinks/>
          {/* Login Icon for Large Devices */}
          <div className="hidden lg:flex items-center">
              <Button
                  type="button"
                  title="Log in"
                  icon={UserLogo}
                  variant={"login_btn"}
              />
          </div>
          {/* Navigation Links small device */}

          <SmallDeviceNavbar/>

      </nav>
  );
};

export default Navbar;
