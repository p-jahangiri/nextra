import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const FormHock = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box mt={"80px"} textAlign={"center"} width={"50%"} marginLeft={"20px"}>
        <Typography
          style={{
            margin: " 65px 0px 60px 180px ",
            width: "60px",
            fontSize: "25px",
            // fontWeight: "bold",
            borderBottom: "1px solid black",
            fontFamily: "Vazir",
          }}
        >
          ورود
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              "& label": {
                marginLeft: "90%",
                fontFamily: "Vazir",
                fontSize: "14px",
                "&.Mui-focused": {
                  marginLeft: "90%",
                },
              },
            }}
            label="ایمیل"
            variant="standard"
            style={{ width: "100%", fontFamily: "Vazir" }}
          />
          <br />
          <TextField
            sx={{
              "& label": {
                marginLeft: "90%",
                fontFamily: "Vazir",
                fontSize: "14px",
                "&.Mui-focused": {
                  marginLeft: "90%",
                },
              },
            }}
            label="گذرواژه"
            variant="standard"
            style={{ width: "100%", marginTop: "30px" }}
          />
        </Box>

        <Box dir="rtl" style={{ textAlign: "initial" }}>
          <Checkbox
            size="small"
            style={{ fontFamily: "Vazir", margin: "-20px" }}
            inputProps={{ "aria-label": "controlled" }}
          />
          <span
            style={{
              fontSize: "12px",
              fontFamily: "Vazir",
              color: "#9b9b9b",
              marginRight: "13px",
            }}
          >
            مرا بخاطر بسپار
          </span>
        </Box>
        <Button
          style={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "10px",
            background: "linear-gradient(90deg, #8f48ff, #1d5aff)",
          }}
          variant="contained"
        >
          {" "}
          وارد شوید
        </Button>
        <Box alignItems={"center"} justifyContent={"center"}>
          <Typography
            className="btn"
            style={{
              fontSize: "13px",
              marginTop: "25px",
              width: "170px",
              marginLeft: "110px",
            }}
          >
            {" "}
            گذرواژه خود را فراموش کرده اید؟
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              marginTop: "5px",
              fontFamily: "Vazir",
            }}
          >
            {" "}
            هنوز حساب کاربری ندارید؟
            <span className="btn" style={{ fontSize: "13px" }}>
              ثبت نام کنید
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default FormHock;
