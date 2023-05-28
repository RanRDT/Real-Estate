import Grid from "./Grid";
import NavFilter from "./NavFilter";

function Properties() {
 
  return (
    <div id="properties-container">
      <NavFilter></NavFilter>
      <div id="all-items">
        <Grid></Grid>
      </div>
    </div>
  );
}

export default Properties;
