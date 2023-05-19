import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, Text, Tabs as MantineTabs } from "@mantine/core";

const NavbarFooter: React.FC = (): JSX.Element => {
    return (
        <MantineTabs
            defaultValue="first"
            classNames={{
                tab: "focus:border-[#3084BE] focus:border-4 focus:text-[#3084BE]",
                root: "border-0 shadow-inner bg-white fixed w-full bottom-0",
            }}
        >
            <MantineTabs.List grow position="center">
                <MantineTabs.Tab value="first" className="uppercase font-medium text-slate-500 px-auto">
                    <SendIcon className="text-[#227C9F] mx-3" />
                    <Text transform="capitalize" align="center" className="text-[#227C9F] font-roboto text-sm">
                        send
                    </Text>
                </MantineTabs.Tab>
                <MantineTabs.Tab value="second" className="uppercase font-medium text-slate-500 px-auto">
                    <CreditCardIcon className="text-[#227C9F] mx-3" />
                    <Text transform="capitalize" align="center" className="text-[#227C9F] font-roboto text-sm">
                        pay
                    </Text>
                </MantineTabs.Tab>
                <MantineTabs.Tab value="third" className="uppercase font-medium text-slate-500 px-auto">
                    <QrCode2Icon className="text-[#227C9F] mx-3.5" />
                    <Text transform="capitalize" align="center" className="text-[#227C9F] font-roboto text-sm">
                        QR code
                    </Text>
                </MantineTabs.Tab>
                <MantineTabs.Tab value="fourth" className="uppercase font-medium text-slate-500 px-auto">
                    <MoreHorizIcon className="text-[#227C9F] mx-3" />
                </MantineTabs.Tab>
            </MantineTabs.List>
        </MantineTabs>
    );
};

export default NavbarFooter;
