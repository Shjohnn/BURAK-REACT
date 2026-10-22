import React from "react";
import "../css/app.css";
import {Box,Container, Stack, Typography} from "@mui/material";



function App() {
  return (
    <Container maxWidth="sm" >
      <Stack flexDirection={"column"}>
        <Box sx={{my:4}}>
          <Typography variant ="h4" component={"h4"}>
            Create Reacgt App on TypeScript with REDUX
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;





