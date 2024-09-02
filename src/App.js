import { Box, TextField, Button, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RouteHere from "./RouteHere"; // Import the new RouteHere component
import "./index.css"; // Ensure Tailwind CSS is imported here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/route-here" element={<RouteHere />} />
      </Routes>
      <Container maxWidth="sm">
      <h1 className="bg-red-400 text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "#0F2B3D",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* Logo or Icon */}
          <Box
            className="loginBox"
            sx={{
              bgcolor: "white",
              borderRadius: "8px",
              border: "2px solid #00C19F",
              padding: 2,
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%2212%22%20r%3D%223%22%20fill%3D%22%2300C19F%22%20/%3E%3Cpath%20d%3D%22M5.636%205.636c3.124-3.124%208.196-3.124%2011.32%200M3.514%203.514c4.686-4.686%2012.284-4.686%2016.97%200M18.364%2018.364c-3.124%203.124-8.196%203.124-11.32%200M20.486%2020.486c-4.686%204.686-12.284%204.686-16.97%200%22%20stroke%3D%22%2300C19F%22%20strokeWidth%3D%222%22%20/%3E%3C/svg%3E')`,
              backgroundSize: "20% 20%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#fff", // Fallback color if background image doesn't load
            }}
          >
            {/* Login Form */}
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Mail"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  style: { color: "#fff" },
                }}
                InputLabelProps={{
                  style: { color: "#b0bec5" },
                }}
                sx={{ input: { color: "white" } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Passwort"
                type="password"
                id="password"
                autoComplete="current-password"
                InputProps={{
                  style: { color: "#fff" },
                }}
                InputLabelProps={{
                  style: { color: "#b0bec5" },
                }}
              />
              <Link to="/route-here" style={{ textDecoration: "none" }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#00C19F",
                    ":hover": {
                      backgroundColor: "#00A789",
                    },
                  }}
                >
                  Route Here
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
