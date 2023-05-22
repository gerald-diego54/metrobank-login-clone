import _ from "lodash";
import { Box, IconButton, StepContent, Typography } from "@mui/material";
import { Container } from "@mantine/core";
import { EnumStep } from "@/types/steps";
import { image } from "@/data/image";
import { NextPage } from "next";
import { signUpStyle } from "@/styles/signup";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment } from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import StepperOne from "@/components/features/signUp/StepperOne";

const Signup: NextPage = (): JSX.Element => {
    const router = useRouter();
    const steps: EnumStep[] = Object.values(EnumStep);

    const onConfirmCloseModal = () => router.push("/");

    return (
        <Fragment>
            <Head>
                <title>Sign up</title>
            </Head>
            <Box sx={signUpStyle.headerStyle}>
                <IconButton onClick={onConfirmCloseModal} sx={{ position: "absolute", right: 5 }}>
                    <CloseIcon />
                </IconButton>
                <Image
                    src={image.metro_bank_with_sub}
                    alt="metrobank logo blue"
                    style={{ margin: "10px auto 0 auto" }}
                    width={170}
                    height={30}
                />
                <Typography align="center" mt={5} sx={signUpStyle.typographyStyle}>
                    sign up
                </Typography>
            </Box>
            <Box sx={{ boxShadow: "0 2px 4px 0.5px rgba(0, 0, 0, 0.2);" }}>
                <Container px={150} py={15}>
                    <Stepper activeStep={0} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel sx={{ textTransform: "capitalize" }}>{label}</StepLabel>
                                <StepContent></StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Container>
            </Box>
            <StepperOne />
        </Fragment>
    );
};

export default Signup;
