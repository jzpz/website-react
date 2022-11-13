import { makeStyles } from "@mui/material";

export const styles = makeStyles((theme) => ({
  
    // Styling material components
    root: {
      width: "100%",
      height: "100vh",
      backgroundColor: "red",
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(2),
      },
    },
    media: {
      height: 56,
      paddingTop: "56.25%", // 16:9
    },
    avatar: {
      backgroundColor: "red",
    },
}));