import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Home() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="body2">
        Shridevi Institute of Engineering and Technology (SIET), Tumakuru, Karnataka is affiliated to Visvesvaraya Technological University, Belagavi, Karnataka, and is approved by AICTE New Delhi. Shridevi Institute of Engineering and Technology is a brainchild of Honorable Dr. M. R. Hulinaykar, (Chairman and Managing Trustee, SCT, Tumakuru). He is the President of Sri Shridevi Charitable Trust (R.), which is running 12 Institutions under various streams of education. His love for education and care for his native district manifested itself in the form of this college.

SIET was established in the year 2002 with the sole aim to impart quality Technical Education. It is approved by AICTE and affiliated to Visvesvaraya Technological University, Belagavi Karnataka state and presently offers undergraduate and postgraduate Programmes with annual intake of 345 and 84 respectively.

At present, College offers 7 Under-Graduate Programmes, 4 Post Graduate Programmes and 4 Ph.D. Research Programmes – covering “Engineering and Technology” and “Management” streams. Since 2006, 17+ Batches of Engineering students have successfully passed out and many of our students have pursued their higher studies in India or abroad and have well settled in their life.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}