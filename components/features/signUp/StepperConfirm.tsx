import { Box, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import AuthService from "@/services/auth.service";

const StepperConfirm: React.FC<{
    inputs: {
        username: string;
        password: string;
        depositAccount: string;
        firstname: string;
        middlename?: string;
        lastname: string;
        mobile: string;
        email: string;
        agreement: boolean;
    };
    stepper: (step: number) => void;
}> = ({ inputs, stepper }): JSX.Element => {
    const authService = new AuthService();
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
    const [maskedPassword, setMaskedPassword] = useState<string>("");
    const itemLists: string[] = [
        "Username",
        "Password",
        "Deposit Account",
        "First Name",
        "Middle Name",
        "Last Name",
        "Mobile Number",
        "Email Address",
    ];

    const onMaskedPassword = (): void => {
        let maskedPass = "";
        for (let index = 0; index < inputs.password.length; index++) maskedPass += "*";
        setMaskedPassword(maskedPass);
    };

    const onSubmit = async () => {
        stepper(2);
        const response = await authService.signUpService("https://localhost:8000/api/v1.0/user/register", inputs);
        console.log(response);
    };

    useEffect(() => {
        onMaskedPassword();
    });

    return (
        <Box sx={{ width: "100%", overflow: "auto", height: "70vh" }}>
            <Box sx={{ margin: "0 auto", width: 603, padding: "30px 30px", overflow: "auto" }}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box sx={{ width: "50%" }}>
                        {itemLists.map((item, index) => (
                            <Typography key={index} fontSize={14} my={2} align="right">
                                {item} :
                            </Typography>
                        ))}
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <Typography fontSize={14} pl={1} my={2} align="left">
                            {inputs.username || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {passwordVisibility ? inputs.password : maskedPassword}
                            {passwordVisibility ? (
                                <Visibility sx={{ marginLeft: 2 }} onClick={() => setPasswordVisibility(false)} />
                            ) : (
                                <VisibilityOff sx={{ marginLeft: 2 }} onClick={() => setPasswordVisibility(true)} />
                            )}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {inputs.depositAccount || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {inputs.firstname || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {inputs.middlename || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {inputs.lastname || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {inputs.mobile || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} align="left">
                            {inputs.email || "N/A"}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", width: "fit-content", margin: "0 auto", gap: 1 }}>
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => stepper(0)}
                        style={{
                            backgroundColor: "#FFFFFF",
                            padding: "15px 0",
                            margin: "15px 0",
                            width: 200,
                            height: 50,
                        }}
                    >
                        <Typography fontSize={14}>back</Typography>
                    </Button>
                    <Button
                        color="primary"
                        onClick={onSubmit}
                        style={{
                            backgroundColor: "#126EBD",
                            padding: "15px 0",
                            margin: "15px 0",
                            width: 200,
                            height: 50,
                        }}
                    >
                        <Typography sx={{ color: "#FFFFFF" }}>next</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default StepperConfirm;
