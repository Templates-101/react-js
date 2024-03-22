import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CopyrightComponent from "../../../components/copyright";
import { Divider, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const defaultTheme = createTheme();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sizes="large"
            sx={{ bgcolor: "primary.main", width: 50, height: 50, mb: 2 }}
          >
            PW
          </Avatar>

          <Typography component="h1" variant="h5">
            Welcome back, Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      aria-label="send"
                      type="submit"
                      color="success"
                      size="small"
                    >
                      {showPassword ? (
                        <VisibilityIcon color="error" />
                      ) : (
                        <VisibilityOffIcon color="success" />
                      )}
                    </IconButton>
                  ),
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                size="small"
                variant="contained"
                endIcon={<SendIcon fontSize="inherit" />}
              >
                Submit
              </Button>
            </Box>

            <Stack
              sx={{ mt: 5, justifyContent: "center" }}
              direction="row"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Link href="#" variant="body2">
                Account Recovery
              </Link>

              <Link href="#" variant="body2">
                {"Register Now!"}
              </Link>
            </Stack>
          </Box>
        </Box>

        <CopyrightComponent sx={{ mt: 1 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
