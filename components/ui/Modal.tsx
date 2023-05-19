import React from "react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useDisclosure } from "@mantine/hooks";
import { Modal as MantineModal, Button, Text, Group, Checkbox, Footer, Container } from "@mantine/core";
import CloseIcon from "@mui/icons-material/Close";

const Modal = () => {
    const [opened, setOpened] = useState(true);

    return (
        <MantineModal opened={opened} size={450} p={0} onClose={() => null} withCloseButton={false}>
            <div className="relative">
                <Image src="/metrobank/developer.webp" alt="picture developer" width="3000" height="3000" />
                <Button
                    onClick={() => setOpened(false)}
                    classNames={{
                        root: "bg-slate-500/50 rounded-full focus:border-0 px-2.5 absolute top-0 right-0 m-3",
                    }}
                >
                    <CloseIcon fontSize="small" className="text-white" />
                </Button>
                <Text align="center" className="font-roboto font-medium bg-[#0b59a2] text-white py-3.5">
                    Do more on Metrobank Online!
                </Text>
                <Group position="center" spacing="xl" my={20}>
                    <Image src="/metrobank/download.png" alt="sent icon" width="40" height="40" />
                    <Image src="/metrobank/download (1).png" alt="sent icon" width="40" height="40" />
                    <Image src="/metrobank/download (2).png" alt="sent icon" width="40" height="40" />
                    <Image src="/metrobank/download (3).png" alt="sent icon" width="40" height="40" />
                    <Image src="/metrobank/download (4).png" alt="sent icon" width="40" height="40" />
                </Group>
                <Text align="center" className="font-roboto font-light text-xs">
                    Send money, pay bills, invest, buy prepaid load, and transfer funds. <br />
                    <br /> We can help you whether you are <br /> a new user, signing up, or you want to upgrade from
                    Metrobankdirect Personal.
                </Text>
                <div className="flex justify-evenly my-5">
                    <Button className="bg-[#126EBD] font-roboto font-normal text-xs">Help me sign up</Button>
                    <Button className="bg-[#126EBD] font-roboto font-normal text-xs">Help me upgrade</Button>
                </div>
                <Checkbox
                    classNames={{ label: "text-xs font-normal", root: "ml-6 my-2" }}
                    label="Do not show this next time"
                />
            </div>
        </MantineModal>
    );
};

export default Modal;
