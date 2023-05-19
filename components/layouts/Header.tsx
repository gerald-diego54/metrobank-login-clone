import { Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Header: React.FC = (): JSX.Element => {
    return (
        <div className="w-full bg-[#0b59a2] shadow-inner py-3">
            <div className="flex flex-row gap-3 ml-3">
                <Image src="/qr_code.png" alt="qr code" width={50} height={50} />
                <div>
                    <Text className="text-white font-roboto text-xl">Good evening</Text>
                    <Text className="font-roboto text-xs text-slate-300">LAST LOGGED IN: May 01 2023 05:52:48 PM</Text>
                </div>
            </div>
            <div className="w-full my-2">
                <Text align="center" className="text-white font-roboto text-sm">
                    Fri, 05 May 2023 11:28:48 PM
                </Text>
                <Text align="center" className="text-slate-300 font-roboto text-xs">
                    PHILIPPINE STANDARD TIME
                </Text>
            </div>
        </div>
    );
};

export default Header;
