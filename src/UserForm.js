import { Button, Grid, Input, Typography } from "@mui/material";

const UserForm = (props) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "#ffffff",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={'h1'} sx={{ color: "#000000" }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="id"
          name="id"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            marginRight: "20px",
            fontSize: "16px",
            width: "100px",
            display: "block",
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="name"
          name="name"
          sx={{ width: "400px" }}
          value={""}
          onChange={(e) => {}}
        />
      </Grid>

      <Button
        sx={{
          margin: "auto",
          marginBottom: "20px",
          backgroundColor: "#00c6e6",
          color: "#000000",
          width: "100px",
          height: "40px",
          fontSize: "16px",
          borderRadius: "10px",
          "&:hover": {
            opacity: 0.7,
            backgroundColor: "#00c6e6",
            color: "#000000",
          },
        }}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default UserForm;
