import { Box } from "@material-ui/core";

const Header = () => (
  <Box display="flex" flexDirection="column" alignItems="center" style={{borderBottom:"1px solid #eaeaea"}}>
    <h1 style={{ fontFamily: "Allura", fontSize: "4rem", marginBlock: 0 }}>
      Bartolomé
    </h1>
    <h5 style={{ marginBlock: 0, textAlign:"center" }}>RESTAURANTE</h5>
  </Box>
);

export default Header;
