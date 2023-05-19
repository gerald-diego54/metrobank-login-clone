import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/components/layouts/Navbar";
import Header from "@/components/layouts/Header";
import Tabs from "@/components/ui/Tabs";
import Balance from "@/components/features/home/Balance";
import NavbarFooter from "@/components/layouts/NavbarFooter";
import { NextPage } from "next";

const Dashboard: NextPage = (): JSX.Element => {
    return (
        <Fragment>
            <Head>
                <title>Homepage</title>
            </Head>
            <Navbar />
            <Header />
            <div className="bg-[#F9F9F9] pt-5">
                <p className="text-center font-roboto">Accounts Overview</p>
                <Tabs />
            </div>
            <Balance />
            <NavbarFooter />
        </Fragment>
    );
};

export default Dashboard;
