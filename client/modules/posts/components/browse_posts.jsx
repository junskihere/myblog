import React from 'react';
import { SpringGrid, measureItems, makeResponsive } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(SpringGrid), {
  maxWidth: 1920,
  minPadding: 100
});
const BrowsePosts = () => (
  <Grid
    component="ul"
     columns={"responsive"}
     columnWidth={150}
     gutterWidth={10}
     gutterHeight={10}
     springConfig={{ stiffness: 170, damping: 26 }}
>
  <li key="A">  <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" /><h1>Helo</h1></li>
  <li key="B">  <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" /><h1>Helo1</h1></li>
  <li key="C">  <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" /><h1>Helo2</h1></li>
  <li key="D">  <img src="http://materializecss.com/images/yuna.jpg" alt="Contact Person" /><h1>Helo3</h1></li>
</Grid>
);  

export default BrowsePosts;
