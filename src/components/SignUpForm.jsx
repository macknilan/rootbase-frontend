import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserProvider } from '../context/auth-context';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://google.com/'>
        Your Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = () => {
  const { signup, data } = useContext(UserProvider);
  const classes = useStyles();

  const { register, errors, handleSubmit } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      recive_promotions: '',
    },
  });

  /* const onSubmit = (data) => alert(JSON.stringify(data)); */
  const onSubmit = (data) => {
    const formData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      recive_promotionse: data.recive_promotionse,
    };
    signup(formData);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                inputRef={register({
                  required: 'First Name is Require',
                  maxLength: {
                    value: 20,
                    message: 'First Name must be less than 20 characters',
                  },
                  minLength: {
                    value: 4,
                    message: 'First Name must be at least 4 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z]{4,20}$/,
                    message: 'First Name must only include letters',
                  },
                })}
                error={!!errors.firstName}
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
              {errors.firstName && (
                <span className={classes.error}>
                  {errors.firstName.message}
                </span>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='lname'
                name='lastName'
                variant='outlined'
                inputRef={register({
                  required: 'Last Name is Require',
                  maxLength: {
                    value: 20,
                    message: 'Last Name must be less than 20 characters',
                  },
                  minLength: {
                    value: 4,
                    message: 'Last Name must be at least 4 characters',
                  },
                  pattern: {
                    value: /^[a-zA-Z]{4,20}$/,
                    message: 'Last Name must only include letters',
                  },
                })}
                error={!!errors.lastName}
                required
                fullWidth
                id='lastName'
                label='Last Name'
                autoFocus
              />
              {errors.lastName && (
                <span className={classes.error}>{errors.lastName.message}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='email'
                variant='outlined'
                inputRef={register({
                  required: 'You must provide the email address!',
                  pattern: {
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'You must provide a valid email address!',
                  },
                })}
                error={!!errors.email}
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
              />
              {errors.email && (
                <span className={classes.error}>{errors.email.message}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                inputRef={register({
                  required: 'Password is required!',
                  minLength: {
                    value: 6,
                    message: 'Your password must be greater than 6 characters',
                  },
                })}
                error={!!errors.password}
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              {errors.password && (
                <span className={classes.error}>{errors.password.message}</span>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={(
                  <Checkbox
                    inputRef={register}
                    name='recive_promotions'
                    color='primary'
                    defaultValue={false}
                  />
                )}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                <LinkRouter to='/'>Already have an account? Sign in</LinkRouter>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUpForm;
