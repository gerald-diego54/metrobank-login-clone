import {
    Box,
    Button,
    ButtonGroup,
    FormControl,
    FormControlLabel,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from "@mui/material";
import { Checkbox } from "@mantine/core";
import { EnumAccountDetailType } from "@/types/account_types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import _ from "lodash";

const StepperOne: React.FC = (): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);
    const [accountDetailType, setAccountDetailType] = useState<EnumAccountDetailType>(EnumAccountDetailType.DEPOSIT);
    const [country, setCountry] = useState("");

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
        <Box sx={{ width: "100%", overflow: "auto", height: "70vh" }}>
            <Box sx={{ margin: "0 auto", width: 603, padding: "30px 30px", overflow: "auto" }}>
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
                <FormControl fullWidth variant="standard" sx={{ margin: "20px 0" }}>
                    <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                        Account Number
                    </InputLabel>
                    <Input fullWidth placeholder="13-digit Account Number" sx={{ fontSize: 14 }} type="number" />
                </FormControl>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
                    <FormControl variant="standard" sx={{ margin: "20px 0" }}>
                        <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                            Country
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={country}
                            style={{ width: 70 }}
                            onChange={(event: SelectChangeEvent) => setCountry(event.target.value)}
                        >
                            <MenuItem defaultChecked={true} value={20}>
                                <Box sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}>
                                    <Typography>PH</Typography>
                                    <Image
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='flag-icon-css-ph' viewBox='0 0 512 512'%3E %3Cpath fill='%230038a8' d='M0 0h512v256H0z'/%3E %3Cpath fill='%23ce1126' d='M0 256h512v256H0z'/%3E %3Cpath fill='%23fff' d='M443.4 256L0 512V0'/%3E %3Cg fill='%23fcd116'%3E %3Cpath stroke-width='1.1' d='M25.2 44.4l15.4 13.3 17.9-9.8-8 18.7 15 14L45 78.9l-8.6 18.4-4.7-19.8-20.2-2.6L29 64.4zM372.1 229l.4 20.3 19.3 6.7-19.3 6.7-.4 20.3-12.3-16.2-19.5 6L352 256l-11.7-16.7 19.5 5.9zM36.5 414.7l8.6 18.4 20.3-1.7-14.8 14 7.9 18.7-17.9-9.8-15.4 13.3 3.9-20-17.5-10.5 20.2-2.6z'/%3E %3Cpath stroke-width='5.7' d='M158.9 148l-6.6 6.6 3.2 50.3-3.3.3-6-45.9-5.5 5.4 8.2 41a51 51 0 0 0-18.4 7.7l-23.3-34.8h-7.7l28.2 36.8-2.5 2.1-33.3-38h-9.4v9.5l38 33.3-2.2 2.5-36.8-28.2v7.7l34.8 23.3a50.9 50.9 0 0 0-7.6 18.4l-41-8.2-5.5 5.5 46 6-.4 3.4-50.3-3.3-6.7 6.6 6.7 6.6 50.3-3.2.3 3.3-45.9 6 5.4 5.5 41-8.2a51 51 0 0 0 7.7 18.4l-34.8 23.3v7.7l36.8-28.2 2.1 2.5-38 33.3v9.4H92l33.3-38 2.5 2.2-28.2 36.8h7.7l23.3-34.8a50.8 50.8 0 0 0 18.4 7.6l-8.2 41 5.5 5.5 6-46 3.3.4-3.2 50.3 6.6 6.7 6.6-6.7-3.2-50.3 3.3-.3 6 45.9 5.5-5.4-8.2-41a51 51 0 0 0 18.4-7.7l23.3 34.8h7.7L190 296.6l2.5-2.1 33.3 38h9.4V323l-38-33.3 2.2-2.5 36.8 28.2v-7.7l-34.8-23.3A50.9 50.9 0 0 0 209 266l41 8.2 5.5-5.5-46-6 .4-3.3 50.3 3.2 6.7-6.6-6.7-6.6-50.3 3.3c0-1.2-.2-2.3-.3-3.4l45.9-6-5.4-5.5-41 8.2a51 51 0 0 0-7.7-18.4l34.8-23.3v-7.7l-36.8 28.2-2.1-2.5 38-33.3v-9.4h-9.5l-33.3 38-2.5-2.2 28.2-36.8h-7.7l-23.3 34.8a50.9 50.9 0 0 0-18.4-7.6l8.2-41-5.5-5.5-6 46-3.3-.4 3.2-50.3z'/%3E %3C/g%3E %3C/svg%3E"
                                        alt="flag ph"
                                        width={20}
                                        height={20}
                                    />
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl focused fullWidth variant="standard" sx={{ margin: "24px 0" }}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <InputLabel
                                sx={{ fontSize: 14, margin: "-3px 0 0 0" }}
                                htmlFor="standard-adornment-password"
                            >
                                Mobile Number
                            </InputLabel>
                            <Input value={"+63"} disabled sx={{ fontSize: 14, width: 40 }} type="text" />
                            <Input
                                fullWidth
                                placeholder="Registered in the branch"
                                sx={{ fontSize: 14, padding: "16px 0 0 0" }}
                                type="number"
                            />
                        </Box>
                    </FormControl>
                </Box>
                <FormControl fullWidth variant="standard">
                    <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                        Email Address
                    </InputLabel>
                    <Input fullWidth placeholder="Enter your email address" sx={{ fontSize: 14 }} type="email" />
                </FormControl>
                <FormControlLabel
                    sx={{ margin: "20px 0" }}
                    control={<Checkbox />}
                    label={
                        <Typography sx={{ fontSize: 14, marginLeft: 3 }}>
                            I allow Metropolitan Bank & Trust Co. to collect and process my data under its Privacy
                            Policy, and I also agree to the Terms of Use of the service and know how to Fight Fraud.
                        </Typography>
                    }
                />
                <Button
                    color="primary"
                    style={{ backgroundColor: "#126EBD", padding: "15px 0", margin: "15px 0" }}
                    fullWidth
                >
                    <Typography sx={{ color: "#FFFFFF" }}>next</Typography>
                </Button>
                <Button color="primary" sx={{ position: "relative", left: "43%" }}>
                    <Typography>cancel</Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default StepperOne;
