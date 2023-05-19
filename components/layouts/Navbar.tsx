import Image from "next/image";
import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar: React.FC = (): JSX.Element => {
    return (
        <nav className="w-full py-3 bg-[#136EBD] shadow-2xl flex justify-between">
            <div className="flex flex-row gap-2 ml-4">
                <IconMenu2 className="text-white my-auto" />
                <Image src="/metrobank-white.webp" alt="logo" width={150} height={20} />
            </div>
            <NotificationsIcon className="text-[#ffffff] my-auto mr-3" />
        </nav>
    );
};

export default Navbar;
