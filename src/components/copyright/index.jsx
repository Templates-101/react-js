import { Typography } from "@mui/material";

const CopyrightComponent = ({sx}) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={sx}
    >
      {"Copyright © Projects Warehouse (Pty) Ltd. Est "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyrightComponent;
