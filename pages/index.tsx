import type { NextPage } from "next";
import Head from "next/head";
import Map from "../components/map/map";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import OverlayLoading from "../components/loadingSpinner";
import { useState } from "react";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 3000);
  return (
    <>
      <Head>
        <title>PWC Map</title>
        <meta name="description" content="Pwc Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OverlayLoading open={isLoading} />
      <main>
        <Box>
          <Grid container justifyContent={"center"} my={5} px={1}>
            <Grid xs={12} md={8} item>
              <Paper elevation={5} color="primary">
                {<Map />}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Home;
