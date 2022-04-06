import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  AppNavbar,
  ButtonLogin,
  ContainerNavbar,
  LoginBox,
  Menu,
  MenuItems,
  Register,
  Hr,
} from "./stylesNavbar";

const pages = ["خانه", "درباره ما", "مارکت Api"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="inherit">
      <AppNavbar>
        <Container maxWidth="xl">
          <ContainerNavbar>
            <Toolbar disableGutters>
              <Box display="flex">
                <img src="/logo.svg" width={"38px"} />
                <img
                  style={{ marginRight: "13px" }}
                  src="/text.svg"
                  width={"44px"}
                />
              </Box>
              <Menu>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {pages.map((page) => (
                    <Typography key={page} onClick={handleCloseNavMenu}>
                      <MenuItems> {page} </MenuItems>
                    </Typography>
                  ))}
                </Box>
              </Menu>
              <Box>
                <LoginBox>
                  <Typography className="btn" width={"58px"}>
                    <Register>ثبت نام</Register>
                  </Typography>
                  <Hr></Hr>
                  <ButtonLogin>ورود</ButtonLogin>
                </LoginBox>
              </Box>
            </Toolbar>
          </ContainerNavbar>
        </Container>
      </AppNavbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
