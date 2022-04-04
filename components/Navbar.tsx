import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = ["خانه", "درباره ما", "مارکت Api"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{ width: "100%", padding: "0px 100px", height: "50px" }}
      dir="rtl"
      position="static"
      color="inherit"
    >
      <Container maxWidth="xl" style={{ marginTop: "-10px" }}>
        <Toolbar disableGutters>
          <Box display="flex">
            <img src="/logo.svg" width={"35px"} />
            <img
              style={{ marginRight: "10px" }}
              src="/text.svg"
              width={"40px"}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              flexGrow: 1,
              marginRight: "40px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                style={{
                  color: "#9b9b9b",
                  fontSize: "12px",
                  marginRight: "4px",
                  fontFamily: "Vazir",
                }}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box display={"flex"} marginTop={"5px"} alignItems={"center"}>
            <Typography
              className="btn"
              width={"60px"}
              style={{
                fontSize: "16px",
                color: "black",
                marginLeft: "20px",
                borderLeft: "1px solid #9b9b9b",
                fontFamily: "Vazir",
              }}
            >
              ثبت نام
            </Typography>
            <Button className="button-log"> ورود</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
