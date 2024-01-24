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
import _ from "lodash";
import { Checkbox } from "@mantine/core";
import { EnumAccountDetailType } from "@/types/account_types";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { image } from "../../../data/image";

const UserRegisterSchema = z
    .object({
        username: z.string().min(8),
        password: z.string().min(8),
        firstname: z.string(),
        middlename: z.string(),
        confirm_password: z.string().min(8),
        lastname: z.string(),
        depositAccount: z.string(),
        mobile: z.string(),
        email: z.string().email(),
        agreement: z.literal(true),
    })
    .superRefine(({ confirm_password, password }, ctx) => {
        if (!_.isEqual(confirm_password, password)) {
            ctx.addIssue({
                code: "custom",
                message: "Password and confirm password does not match",
                path: ["password", "confirm_password"],
            });
        }
    });

const StepperDetail: React.FC<{
    stepper: (step: number) => void;
    inputs: (input: {
        username: string;
        password: string;
        confirm_password: string;
        firstname: string;
        middlename?: string;
        lastname: string;
        depositAccount: string;
        mobile: string;
        email: string;
        agreement: boolean;
    }) => void;
}> = ({ stepper, inputs }): JSX.Element => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [accountDetailType, setAccountDetailType] = useState<EnumAccountDetailType>(EnumAccountDetailType.DEPOSIT);
    const [country, setCountry] = useState<string>("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(UserRegisterSchema),
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((showPassword) => !showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    const InputAdormentPassword: React.FC = (): JSX.Element => {
        return (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        );
    };
    const InputAdormentConfirmPassword: React.FC = (): JSX.Element => {
        return (
            <InputAdornment position="end">
                <IconButton onClick={handleClickShowConfirmPassword} onMouseDown={handleMouseDownConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        );
    };

    const onSubmit = (data: any) => {
        const obj = {};

        if (_.isEqual(errors, obj)) {
            stepper(1);
            inputs(data);
        } else {
            console.log(errors);
        }
    };

    useEffect(() => {
        console.log(errors);
    }, [errors]);

    return (
        <Box sx={{ width: "100%", overflow: "auto", height: "70vh" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ margin: "0 auto", width: 603, padding: "30px 30px", overflow: "auto" }}>
                    <TextField
                        label="Username"
                        placeholder="Enter your username"
                        variant="standard"
                        fullWidth
                        {...register("username")}
                    />
                    <FormControl fullWidth variant="standard" sx={{ margin: "20px 0" }}>
                        <InputLabel sx={{ fontSize: 14 }} htmlFor="password">
                            Password
                        </InputLabel>
                        <Input
                            fullWidth
                            placeholder="Enter your password"
                            sx={{ fontSize: 14 }}
                            type={showPassword ? "text" : "password"}
                            endAdornment={<InputAdormentPassword />}
                            {...register("password")}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="standard" sx={{ margin: "20px 0" }}>
                        <InputLabel sx={{ fontSize: 14 }} htmlFor="confirm-password">
                            Confirm Password
                        </InputLabel>
                        <Input
                            fullWidth
                            placeholder="Enter your confirm password"
                            sx={{ fontSize: 14 }}
                            type={showConfirmPassword ? "text" : "password"}
                            endAdornment={<InputAdormentConfirmPassword />}
                            {...register("confirm_password")}
                        />
                    </FormControl>
                    <TextField
                        label="First Name"
                        placeholder="Enter your first name"
                        variant="standard"
                        fullWidth
                        {...register("firstname")}
                    />
                    <TextField
                        label="Middle Name (Optional)"
                        sx={{ margin: "20px 0" }}
                        placeholder="Enter your middle name"
                        variant="standard"
                        fullWidth
                        {...register("middlename")}
                    />
                    <TextField
                        label="Last Name"
                        placeholder="Enter your last name"
                        variant="standard"
                        fullWidth
                        {...register("lastname")}
                    />
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
                                color={
                                    _.isEqual(accountDetailType, EnumAccountDetailType.INVESTMENT) ? "white" : "black"
                                }
                            >
                                investment
                            </Typography>
                        </Button>
                    </ButtonGroup>
                    <FormControl fullWidth variant="standard" sx={{ margin: "20px 0" }}>
                        <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                            Account Number
                        </InputLabel>
                        <Input
                            fullWidth
                            placeholder="13-digit Account Number"
                            sx={{ fontSize: 14 }}
                            type="text"
                            {...register("depositAccount")}
                        />
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
                                        <Image src={image.ph_flag} alt="flag ph" width={20} height={20} />
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
                                <Input value={"+63"} disabled sx={{ fontSize: 14, width: 40 }} type="number" readOnly />
                                <Input
                                    fullWidth
                                    placeholder="Registered in the branch"
                                    sx={{ fontSize: 14, padding: "16px 0 0 0" }}
                                    type="text"
                                    {...register("mobile")}
                                />
                            </Box>
                        </FormControl>
                    </Box>
                    <FormControl fullWidth variant="standard">
                        <InputLabel sx={{ fontSize: 14 }} htmlFor="standard-adornment-password">
                            Email Address
                        </InputLabel>
                        <Input
                            fullWidth
                            placeholder="Enter your email address"
                            sx={{ fontSize: 14 }}
                            type="email"
                            {...register("email")}
                        />
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
                        {...register("agreement")}
                    />
                    <Button
                        color="primary"
                        style={{ backgroundColor: errors ? "#E0E0E0" : "#126EBD", padding: "15px 0", margin: "15px 0" }}
                        fullWidth
                        type="submit"
                    >
                        <Typography sx={{ color: "#FFFFFF" }}>next</Typography>
                    </Button>
                    <Button color="primary" sx={{ position: "relative", left: "43%" }}>
                        <Typography>cancel</Typography>
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default StepperDetail;
