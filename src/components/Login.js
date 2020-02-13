import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Link from '@material-ui/core/Link';

export default function LogIn() {
  const preventDefault = event => event.preventDefault();

  return (
    <Paper>
      <Avatar>
        <PermIdentityIcon />
      </Avatar>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="User Name"
          name="username"
          // autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          LOGIN
        </Button>
      </form>
      <Link href="#" onClick={preventDefault}>
        Create Account
      </Link>
    </Paper>
  )
}