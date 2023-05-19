const Footer = dynamic(() => import("@/components/features/home/Footer"), { ssr: false });
import { IconButton, Input, InputAdornment, InputLabel, Paper, Typography } from "@mui/material";
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

const Home: NextPage = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
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
                <title>Homepage</title>
            </Head>
            <Typography align="center" mt={10} sx={{ color: "#001A88", fontWeight: 500, fontSize: "5rem" }}>
                You’re in good hands
            </Typography>
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
                        <Input placeholder="Username" sx={{ fontSize: 14 }} fullWidth />
                    </Stack>
                </Box>
                <Box sx={{ margin: "0 auto" }}>
                    <Stack direction="row" spacing={1}>
                        <LockIcon sx={{ color: "#B5B5B5", margin: "auto 0" }} />
                        <Input
                            fullWidth
                            placeholder="Password"
                            sx={{ fontSize: 14 }}
                            type={showPassword ? "text" : "password"}
                            endAdornment={<InputAdorment />}
                        />
                    </Stack>
                </Box>
                <Button color="primary" style={{ backgroundColor: "#001A88", marginTop: "15px" }} fullWidth>
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
            <Footer />
        </Fragment>
    );
};

export default Home;
