import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { userProfile, addUser } = useAuthStore();

  console.log("up", userProfile);

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image src={Logo} className="cursor-pointer" alt="logo" />
        </div>
      </Link>
      <div>SEARCH</div>
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload"><button className="text-md font-semibold flex items-center gap-2 border-2 px-2 md:px-4">
            <IoMdAdd className="text-xl" /> {' '}
            <span className="md:block hidden">Upload</span>
            </button></Link>
            {userProfile.image && <Link href="/">
              <>
                <Image
                  className="rounded-full cursor-pointer"
                  src={userProfile.image}
                  alt=""
                  width={40}
                  height={40}
        
                />
              </>
            </Link> }
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
