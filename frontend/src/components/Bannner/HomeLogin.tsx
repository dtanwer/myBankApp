import { Box, Button, Typography } from '@mui/material'

export const HomeLogin = () => {
  return (
    <Box className="homeloginBox">
      <Typography variant="h6" sx={{ pt: 2, pb: 2, mb: 2, borderBottom: "1px solid #d6d8d9" }}>Online Banking</Typography>
      <Button variant="contained" sx={{ width: "90%", mb: 1 }}>Secure Log In</Button>
      <Typography variant="caption" display="block" gutterBottom sx={{cursor:"pointer"}}>
        Forgot username/password?
      </Typography>
      <Box className="footer">
        <Typography variant="caption" display="block" gutterBottom sx={{ textDecoration: "underline",cursor:"pointer" }}>
          Setup in 1 Minute
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{ textDecoration: "underline",cursor:"pointer"  }}>
          Security Center
        </Typography>
      </Box>
    </Box>
  )
}
