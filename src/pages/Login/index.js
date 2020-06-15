import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { LoginForm } from './components/LoginForm';
import { connect } from 'react-redux';

import { login as authLogin } from './../../Store/auth/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginInner = ({
  history,
  isLoggedIn,
  authLogin: authLoginAction
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (isLoggedIn) history.push('/users');
  }, [isLoggedIn, history]);

  const handleLogin = (credentials) => authLoginAction(credentials);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
       <LoginForm onFormSubmit={ handleLogin } />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  authLogin
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginInner);