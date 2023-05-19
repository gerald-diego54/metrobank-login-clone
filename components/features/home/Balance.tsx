import { Paper, Text } from "@mantine/core";
import React from "react";

const Balance: React.FC = (): JSX.Element => {
    return (
        <Paper onClick={() => console.log("clicked!")} shadow="xs" p="md" mx={40} my={30} className="shadow-md border">
            <Text transform="capitalize" weight={500} align="center" className="font-roboto text-[#227C9F]">
                total deposits
            </Text>
            <Text transform="capitalize" weight={400} align="center" className="font-roboto text-[#227C9F] mt-2">
                PHP 37, 000
            </Text>
        </Paper>
    );
};

export default Balance;
