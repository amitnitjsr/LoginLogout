import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    boxShadow: "0px 0px 1px 1px lightgrey"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn = props => {
  const classes = useStyles();
  const [checkSignup, setSignup] = useState(false);
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");
  const handleNavigation = () => {
    setSignup(!checkSignup);
  };
  const handleTextChange = (event, name) => {
    const value = event.target.value;
    console.log(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userdetails = {
      email: getEmail,
      password: getPassword
    };
    console.log(userdetails);
    if (getEmail && getPassword) {
      checkSignup
        ? props.handleSignup(userdetails)
        : props.history.push("/admin");
      console.log(props.checkUserExistance);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSignup(!checkSignup);
    } else console.log("invalid password");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            value={getEmail}
            onChange={event => handleTextChange(event, "email")}
            type="email"
            autoComplete="email"
            required
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={getPassword}
            onChange={event => handleTextChange(event, "password")}
            required
            autoComplete="current-password"
          />
          {checkSignup && (
            <TextField
              variant="outlined"
              margin="normal"
              name="re-enterPassword"
              label="Confirm Password"
              value={getConfirmPassword}
              onChange={event => handleTextChange(event, "confirmPassword")}
              type="password"
              id="confirm-password"
              autoComplete="current-password"
              required
              fullWidth
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            {checkSignup ? "SignUp" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick={handleNavigation} style={{ cursor: "pointer" }}>
                {!checkSignup ? "Don't have an account? Sign Up" : "Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
const mapStateToProps = state => {
  return {
    checkUserExistance: state.userDetails
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleSignup: userDetail =>
      dispatch({ type: "CREATE_USER", userDetail: userDetail })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
