import { Container, Text } from "@mantine/core";
import { Box } from "@mui/material";
import React, { memo } from "react";

const Footer: React.FC = (): JSX.Element => {
    return (
        <Box className="bg-[url('/metrobank/footer-bg.webp')] h-[140px] z-0 bg-cover md:h-[260px] bg-no-repeat fixed bottom-0 w-full">
            <Container fluid>
                <Text align="center" className="font-roboto w-72 text-xs mx-auto mt-[80px] lg:mt-[200px] text-white">
                    Deposits are insured by PDIC up to PHP 500,000 per depositor Metrobank is a proud member of BancNet
                    Metrobank is regulated by Bangko Sentral ng Pilipinas
                </Text>
            </Container>
        </Box>
    );
};

export default memo(Footer);
