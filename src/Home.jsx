import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Features from './components/Features';
import Contactus from './components/Contactus';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Features />
      <Contactus />
    </div>
  );
}

// import React from "react";
// import styled from "styled-components";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";
// import { Button, CardActionArea, CardActions } from "@material-ui/core";
// import "./home.css";
// import Homeimg1 from "./image/home-bg.png";
// import sortingimg from "./image/sortingimg.png";

// const Container = styled.div`
//   min-height: 80vh;
// `;

// const flexCenter = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };
// export default function Home() {
//   return (
//     <>
//       <Container className="firstSec">
//         <Grid container spacing={1} style={{ margin: "0px" }}>
//           <Grid item xs={12} sm={6} style={flexCenter}>
//             <div className="textSec">
//               <h1>
//                 Learn with
//                 <span>Visualization.</span>
//               </h1>
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={6} style={flexCenter}>
//             <div className="imgsec" style={flexCenter}>
//               <img src={Homeimg1} alt="" />
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//       <Container style={flexCenter} className="featureSec">
//         <div className="featureHead">
//           <h2>Features</h2>
//         </div>
//         <Grid container spacing={1} className="featureBody">
//           <Grid item xs={12} sm={4}>
//             <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={sortingimg}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Sorting
//                   </Typography>
//                   <Typography variant="body2">
//                     Lizards are a widespread group of squamate reptiles, with
//                     over 6,000 species, ranging across all continents except
//                     Antarctica
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//           <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={sortingimg}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Searching
//                   </Typography>
//                   <Typography variant="body2">
//                     Lizards are a widespread group of squamate reptiles, with
//                     over 6,000 species, ranging across all continents except
//                     Antarctica
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//           <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={sortingimg}
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Data Structure
//                   </Typography>
//                   <Typography variant="body2">
//                     Lizards are a widespread group of squamate reptiles, with
//                     over 6,000 species, ranging across all continents except
//                     Antarctica
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//       <Container style={{ backgroundColor: "white" }}>
//         <p>THis is how it works section</p>
//       </Container>
//     </>
//   );
// }
