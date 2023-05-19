import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
} from "@mui/material";
import { Container } from "@mantine/core";
import { EnumAccountDetailType } from "@/types/account_types";
import { EnumStep } from "@/types/steps";
import { image } from "@/data/image";
import { NextPage } from "next";
import { signUpStyle } from "@/styles/signup";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import _ from "lodash";

const Signup: NextPage = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [accountDetailType, setAccountDetailType] = useState<EnumAccountDetailType>(EnumAccountDetailType.DEPOSIT);

    const router = useRouter();
    const steps: EnumStep[] = Object.values(EnumStep);

    const onConfirmCloseModal = () => router.push("/");
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const InputAdorment: React.FC = (): JSX.Element => {
        return (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        );
    };

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
                            </Step>
                        ))}
                    </Stepper>
                </Container>
            </Box>
            <Box sx={{ margin: "0 auto", width: 603, padding: "30px 30px" }}>
                <TextField label="Username" placeholder="Enter your username" variant="standard" fullWidth />
                <FormControl fullWidth variant="standard" sx={{ margin: "20px 0" }}>
                    <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                        Password
                    </InputLabel>
                    <Input
                        fullWidth
                        placeholder="Enter your password"
                        sx={{ fontSize: 14 }}
                        type={showPassword ? "text" : "password"}
                        endAdornment={<InputAdorment />}
                    />
                </FormControl>
                <TextField label="First Name" placeholder="Enter your first name" variant="standard" fullWidth />
                <TextField
                    label="Middle Name (Optional)"
                    sx={{ margin: "20px 0" }}
                    placeholder="Enter your middle name"
                    variant="standard"
                    fullWidth
                />
                <TextField label="Last Name" placeholder="Enter your last name" variant="standard" fullWidth />
                <ButtonGroup
                    fullWidth
                    variant="contained"
                    aria-label="outlined primary button group"
                    sx={{ margin: "20px 0" }}
                >
                    <Button
                        fullWidth
                        style={
                            _.isEqual(accountDetailType, EnumAccountDetailType.DEPOSIT)
                                ? { backgroundColor: "#07A6EA" }
                                : { backgroundColor: "#FFFFFF" }
                        }
                        onClick={() => setAccountDetailType(EnumAccountDetailType.DEPOSIT)}
                    >
                        <Typography color={accountDetailType === EnumAccountDetailType.DEPOSIT ? "white" : "black"}>
                            deposit
                        </Typography>
                    </Button>
                    <Button
                        fullWidth
                        style={
                            _.isEqual(accountDetailType, EnumAccountDetailType.INVESTMENT)
                                ? { backgroundColor: "#07A6EA" }
                                : { backgroundColor: "#FFFFFF" }
                        }
                        onClick={() => setAccountDetailType(EnumAccountDetailType.INVESTMENT)}
                    >
                        <Typography
                            color={_.isEqual(accountDetailType, EnumAccountDetailType.INVESTMENT) ? "white" : "black"}
                        >
                            investment
                        </Typography>
                    </Button>
                </ButtonGroup>
            </Box>
        </Fragment>
    );
};

export default Signup;
