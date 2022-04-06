import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { BoxContainer, ContainerForm, TextLogin } from "./stylesForm";

const Form = () => {
  return (
    <Box>
      <ContainerForm>
        <Box>
          <BoxContainer>
            <TextLogin>ورود</TextLogin>
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
                    fontSize: "14px",
                    "&.Mui-focused": {
                      marginLeft: "90%",
                    },
                  },
                }}
                label="ایمیل"
                variant="standard"
                style={{ width: "100%", border: "none" }}
                type="email"
              />
              <br />
              <TextField
                sx={{
                  "& label": {
                    marginLeft: "90%",
                    fontSize: "14px",
                    "&.Mui-focused": {
                      marginLeft: "90%",
                    },
                  },
                }}
                type="password"
                label="گذرواژه"
                variant="standard"
                style={{ width: "100%", marginTop: "15px", outline: "none" }}
              />
            </Box>
            <Box dir="rtl" style={{ textAlign: "initial" }}>
              <Checkbox
                size="small"
                style={{ margin: "-20px" }}
                inputProps={{ "aria-label": "controlled" }}
              />
              <span
                style={{
                  fontSize: "12px",

                  color: "#9b9b9b",
                  marginRight: "13px",
                }}
              >
                {" "}
                مرا بخاطر بسپار
              </span>
            </Box>
            <Button
              style={{
                width: "100%",
                marginTop: "15px",
                borderRadius: "10px",
                transition: " all 0.5s",
                background: "linear-gradient(90deg, #8f48ff, #1d5aff)",
              }}
              variant="contained"
            >
              {" "}
              وارد شوید{" "}
            </Button>
            <Box>
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
                گذرواژه خود را فراموش کرده اید؟{" "}
              </Typography>
              <Typography
                style={{
                  marginLeft: "110px",
                  fontSize: "12px",
                  marginTop: "5px",
                }}
              >
                {" "}
                هنوز حساب کاربری ندارید؟
                <span className="btn" style={{ fontSize: "13px" }}>
                  {" "}
                  ثبت نام کنید
                </span>
              </Typography>
            </Box>
          </BoxContainer>
        </Box>
      </ContainerForm>
    </Box>
  );
};
export default Form;
