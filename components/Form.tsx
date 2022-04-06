import * as React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { BoxContainer, ButtonLog, ContainerForm, TextAccount, TextForgat, TextLogin,Text } from "./stylesForm";



const Form = () => {
  // const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  // const submitForm = (data) => {
  //   console.log(data);
  //   console.log(watch('id'));
  //   save(data);
// };
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
            <ButtonLog>
              وارد شوید
            </ButtonLog>
            <Box>
            <TextForgat className="btn">گذرواژه خود را فراموش کرده اید؟</TextForgat>
              <TextAccount >
                هنوز حساب کاربری ندارید؟
               <Text className="btn">ثبت نام کنید</Text>
              </TextAccount>
            </Box>
          </BoxContainer>
        </Box>
      </ContainerForm>
    </Box>
  );
};
export default Form;
