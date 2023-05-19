import React, { Fragment, memo } from "react";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useState } from "react";
import { Text, Paper, Box, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "animate.css";

const SignInForm: React.FC = (): JSX.Element => {
    const router = useRouter();
    const [buttonDisabled] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const {
        getInputProps,
        onSubmit: submits,
        values,
    } = useForm({
        initialValues: {
            username: "",
            password: "",
        },
    });
    const onSubmit = submits((values: any) => console.log(values));

    return (
        <Fragment>
            <Text
                align="center"
                className="animate__animated animate__fadeInUp animate__delay-1s font-roboto text-[5rem] mt-20 mb-10 text-[#001A88] font-medium"
            >
                You’re in good hands
            </Text>
            <Paper shadow="xs" p="md" mx="auto" w={370} bg="#E6E6E6" className="shadow-lg border z-20 relative">
                <Image src="/metrobank-blue.webp" alt="metrobank logo" width={180} height={200} className="mx-auto" />
                <Box className="flex flex-row gap-3 ml-4 mt-3 w-fit">
                    <PersonIcon sx={{ color: "#B5B5B5" }} className="mt-6 py-auto" />
                    <TextField
                        fullWidth
                        id="standard-basic"
                        label="Username"
                        InputLabelProps={{
                            style: {
                                fontSize: "0.9rem",
                                paddingTop: 5,
                            },
                        }}
                        className="font-roboto w-[260px]"
                        variant="standard"
                        {...getInputProps("username")}
                    />
                </Box>
                <Box className="flex flex-row gap-3 ml-4 mt-2 w-fit">
                    <LockIcon sx={{ color: "#B5B5B5" }} className="my-6 py-auto" />
                    <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password" className="font-roboto text-[0.9rem]">
                            Password
                        </InputLabel>
                        <Input
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            className="font-roboto w-[260px]"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            {...getInputProps("password")}
                        />
                    </FormControl>
                </Box>
                <Box className="flex flex-row gap-3 ml-4 mt-2 w-fit">
                    <Button
                        className="uppercase w-[300px] bg-[#001A88] hover:bg-[#001A88] shadow-md"
                        onClick={() => onSubmit}
                        disabled={buttonDisabled}
                    >
                        login
                    </Button>
                </Box>
                <Box className="flex justify-between gap-3 ml-4 mt-4 w-full pr-10">
                    <Link href="#">
                        <Text className="font-roboto text-sm text-[#001A88]" onClick={() => router.push("/signup")}>
                            Sign up
                        </Text>
                    </Link>
                    <Link href="#">
                        <Text className="font-roboto text-sm text-[#001A88]">Recover access</Text>
                    </Link>
                </Box>
            </Paper>
        </Fragment>
    );
};

export default memo(SignInForm);
