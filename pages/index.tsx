import { useUser } from '@auth0/nextjs-auth0';
import { CircularProgress, Typography } from '@material-ui/core';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div><CircularProgress /></div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Typography> Welcome {user.name}! <a href="/api/auth/logout">Logout</a></Typography>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}