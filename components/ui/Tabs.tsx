import React from "react";
import { Tabs as MantineTabs } from "@mantine/core";

const Tabs = () => {
    return (
        <MantineTabs
            defaultValue="first"
            classNames={{
                tab: "focus:border-[#3084BE] focus:border-4 focus:text-[#3084BE]",
                root: "border-0 bg-[#F9F9F9]",
            }}
        >
            <MantineTabs.List grow position="center">
                <MantineTabs.Tab value="first" className="uppercase font-medium text-slate-500">
                    peso
                </MantineTabs.Tab>
                <MantineTabs.Tab value="second" className="uppercase font-medium text-slate-500">
                    foreign
                </MantineTabs.Tab>
            </MantineTabs.List>
        </MantineTabs>
    );
};

export default Tabs;
