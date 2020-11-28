import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' target='_blank' href='https://google.com/'>
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            label='Email Address'
            id='email'
            name='email'
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
            autoComplete='email'
            autoFocus='true'
          />
          {errors.email && (
            <span className={classes.error}>{errors.email.message}</span>
          )}
          <TextField
            variant='outlined'
            name='password'
            label='Password'
            type='password'
            id='password'
            inputRef={register({
              required: 'Password is required!',
              minLength: {
                value: 6,
                message: 'Your password must be greater than 6 characters',
              },
            })}
            error={!!errors.password}
            margin='normal'
            required
            fullWidth
            autoComplete='current-password'
          />
          {errors.password && (
            <span className={classes.error}>
              {errors.password.message}
              <br />
            </span>
          )}
          <FormControlLabel
            control={(
              <Checkbox
                inputRef={register}
                name='remember'
                defaultValue={false}
                color='primary'
              />
            )}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2' disable>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                <LinkRouter to='/signup'>
                  Don't have an account? Sign Up
                </LinkRouter>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
