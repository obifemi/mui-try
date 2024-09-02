import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function RouteHere() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        bgcolor: '#f0f0f0',
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Welcome to RouteHere Page!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go Back to Login
      </Button>
      
    </Box>
  );
}

export default RouteHere;
