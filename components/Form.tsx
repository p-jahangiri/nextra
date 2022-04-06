import * as React from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

import {
  BoxContainer,
  ButtonLog,
  ContainerForm,
  TextAccount,
  TextForgat,
  TextLogin,
  Text,
  CheckSpan,
} from "./stylesForm";
interface IFormInputs {
  TextField: string;
  Email: string;
  Password: any;
  errors: any;
}

const Form = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <Box>
      <ContainerForm>
        <Box>
          <BoxContainer>
            <TextLogin>ورود</TextLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="Email"
                control={control}
                rules={{ required: true }}
                // {errors.Email?.type === 'required' && "First name is required"}
                render={({ field }) => (
                  <TextField
                    sx={{
                      "& label": {
                        marginLeft: "90%",
                        fontSize: "14px",
                        "&.Mui-focused": {
                          marginLeft: "93%",
                        },
                      },
                    }}
                    type="email"
                    label="ایمیل"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "20px" }}
                    {...field}
                  />
                )}
                
              />
              <br />
              <Controller
                name="Password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    sx={{
                      "& label": {
                        marginLeft: "90%",
                        fontSize: "14px",
                        "&.Mui-focused": {
                          marginLeft: "93%",
                        },
                      },
                    }}
                    type="password"
                    label="گذرواژه"
                    variant="standard"
                    style={{ width: "100%",marginBottom: "10px" }}
                    {...field}
                  />
                )}
              />{" "}
              <Box dir="rtl" style={{ textAlign: "initial" }}>
                <Checkbox
                  size="small"
                  style={{ margin: "-20px" }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <CheckSpan>مرا به خاطر بسپار</CheckSpan>
              </Box>
              <ButtonLog type="submit">وارد شوید</ButtonLog>
            </form>
            <Box>
              <TextForgat className="btn"> گذرواژه خود را فراموش کرده اید؟ </TextForgat>
              <TextAccount> هنوز حساب کاربری ندارید؟
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
