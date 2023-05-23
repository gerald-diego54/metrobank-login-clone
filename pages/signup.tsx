import _ from "lodash";
import { Box, IconButton, Typography } from "@mui/material";
import { Container } from "@mantine/core";
import { EnumStep } from "@/types/steps";
import { image } from "@/data/image";
import { NextPage } from "next";
import { signUpStyle } from "@/styles/signup";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import StepperConfirm from "@/components/features/signUp/StepperConfirm";
import StepperDetail from "@/components/features/signUp/StepperDetail";

const Signup: NextPage = (): JSX.Element => {
    const [activeStepper, setActiveStepper] = useState(0);
    const steps: EnumStep[] = Object.values(EnumStep);
    const router = useRouter();

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
                    <Stepper activeStep={activeStepper} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel sx={{ textTransform: "capitalize" }}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Container>
            </Box>
            {_.isEqual(activeStepper, 0) && <StepperDetail stepper={(step) => setActiveStepper(step)} />}
            {_.isEqual(activeStepper, 1) && (
                <StepperConfirm
                    username={""}
                    password={""}
                    depositAccount={0}
                    firstname={""}
                    lastname={""}
                    mobile={""}
                    email={""}
                    stepper={(step) => setActiveStepper(step)}
                />
            )}
        </Fragment>
    );
};

export default Signup;
