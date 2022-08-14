import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import styles from './tabpanel.module.css';

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card className={styles.cardContainer}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                11 Mar · Completed
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quarterfinals
              </Typography>
              <Divider />
              <Stack direction="row" spacing={6}>
                <img
                  src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                  alt="flags"
                  className={styles.FlagsIcon}
                />
                <Typography className={styles.playersName}>
                  N. Basilashvili
                </Typography>
                <span className={styles.playersScore}>3&nbsp;6&nbsp;7</span>
              </Stack>
              <Stack direction="row" spacing={6}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png"
                  alt="flags"
                  className={styles.FlagsIcon}
                />
                <Typography className={styles.playersName}>John Doe</Typography>
                <span className={styles.playersScore}>3&nbsp;6&nbsp;7</span>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={styles.cardContainer}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                11 Mar · Completed
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Quarterfinals
              </Typography>
              <Divider />
              <Stack direction="row" spacing={6}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png"
                  alt="flags"
                  className={styles.FlagsIcon}
                />
                <Typography className={styles.playersName}>
                  Michael Jordan
                </Typography>
                <span className={styles.playersScore}>3&nbsp;6&nbsp;7</span>
              </Stack>
              <Stack direction="row" spacing={6}>
                <img
                  src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
                  alt="flags"
                  className={styles.FlagsIcon}
                />
                <Typography className={styles.playersName}>
                  Suarez David
                </Typography>
                <span className={styles.playersScore}>3&nbsp;6&nbsp;7</span>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
