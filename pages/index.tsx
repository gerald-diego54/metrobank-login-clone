const Footer = dynamic(() => import("@/components/features/home/Footer"), { ssr: false });
import { IconButton, Input, InputAdornment, Paper, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { image } from "@/data/image";
import { loginStyle } from "@/styles/login";
import { NextPage } from "next";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Modal from "@/components/ui/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthService from "@/services/auth.service";
import { useRouter } from "next/router";
import _ from "lodash";

const AuthUserSchema = z.object({
    username: z.string(),
    password: z.string(),
});

const Home: NextPage<{ data: string }> = ({ data = "value" }): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [textFieldErrors, setTextFieldErrors] = useState({ message: "", path: "" });
    const router = useRouter();
    const authService = new AuthService();
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(AuthUserSchema) });
    const InputAdorment: React.FC = (): JSX.Element => {
        return (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        );
    };
    const onSubmit = async (data: any) => {
        try {
            const response = await authService.loginService("https://localhost:8000/api/v1.0/user/login", data);
            localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
            await router.push("/dashboard");
        } catch (error: any) {
            if (error.response.data.code === "P2025") {
                setTextFieldErrors({ message: "Username or email doesn't exist", path: "username" });
            } else {
                setTextFieldErrors({ message: error.response.data.message, path: error.response.data.path[0] });
            }
        }
    };

    return (
        <Fragment>
            <Head>
                <title>Homepage</title>
            </Head>
            <Typography
                align="center"
                mt={10}
                sx={{
                    color: "#001A88",
                    fontWeight: 500,
                    fontSize: {
                        lg: "5rem",
                        xs: "2.2rem",
                    },
                }}
            >
                You’re in good hands
            </Typography>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Paper elevation={2} sx={loginStyle.paperStyle}>
                    <Image
                        style={loginStyle.imageStyle}
                        src={image.metrobank_logo_signin}
                        alt="metrobank logo"
                        width={180}
                        height={200}
                    />
                    <Box sx={{ margin: "0 auto" }}>
                        <Stack direction="row" spacing={1} sx={{ padding: "12px 0" }}>
                            <PersonIcon sx={{ color: "#B5B5B5", margin: "auto 0" }} />
                            <Input placeholder="Username" sx={{ fontSize: 14 }} fullWidth {...register("username")} />
                        </Stack>
                    </Box>
                    <Box sx={{ margin: "0 auto" }}>
                        <Stack direction="row" spacing={1}>
                            <LockIcon sx={{ color: "#B5B5B5", margin: "auto 0" }} />
                            <Input
                                fullWidth
                                placeholder="Password"
                                sx={{ fontSize: 14, color: _.isEqual(textFieldErrors.path, "password") ? "red" : null }}
                                type={showPassword ? "text" : "password"}
                                endAdornment={<InputAdorment />}
                                error={true}
                                {...register("password")}
                            />
                        </Stack>
                        {textFieldErrors.message ? (
                            <Typography sx={{ color: "red", fontSize: "13px", marginLeft: "30px" }}>
                                {textFieldErrors.message}
                            </Typography>
                        ) : null}
                    </Box>
                    <Button
                        type="submit"
                        color="primary"
                        style={{ backgroundColor: "#001A88", marginTop: "15px" }}
                        fullWidth
                    >
                        <Typography sx={{ color: "#FFFFFF" }}>login</Typography>
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={1} pb={3}>
                        <Link href="/signup">
                            <Typography variant="body2" sx={{ color: "#001A88" }}>
                                Sign up
                            </Typography>
                        </Link>
                        <Link href="#">
                            <Typography variant="body2" sx={{ color: "#001A88" }}>
                                Recover access
                            </Typography>
                        </Link>
                    </Box>
                </Paper>
            </form>
            <Modal />
            <Footer />
        </Fragment>
    );
};

export default Home;
