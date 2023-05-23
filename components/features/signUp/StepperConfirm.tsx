import { Box, Button, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import _ from "lodash";

const StepperConfirm: React.FC<{
    username: string;
    password: string;
    depositAccount: number;
    firstname: string;
    middlename?: string;
    lastname: string;
    mobile: string;
    email: string;
    stepper: (step: number) => void;
}> = ({ username, password, depositAccount, firstname, middlename, lastname, mobile, email, stepper }): JSX.Element => {
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
        for (let index = 0; index < password.length; index++) maskedPass += "*";
        setMaskedPassword(maskedPass);
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
                            {username || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {passwordVisibility ? password : maskedPassword}
                            {passwordVisibility ? (
                                <Visibility sx={{ marginLeft: 2 }} onClick={() => setPasswordVisibility(false)} />
                            ) : (
                                <VisibilityOff sx={{ marginLeft: 2 }} onClick={() => setPasswordVisibility(true)} />
                            )}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {depositAccount || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {firstname || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {middlename || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {lastname || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} mb={2} align="left">
                            {mobile || "N/A"}
                        </Typography>
                        <Typography fontSize={14} pl={1} align="left">
                            {email || "N/A"}
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
                        onClick={() => stepper(2)}
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
