import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import acordiones from "../../../Assets/menu.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontFamily: "Allura",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(acordiones);
  return (
    <div className={classes.root}>
      {acordiones.map((a) => (
        <Accordion
          key={`${a.id}-key`}
          expanded={expanded === `panel${a.id}`}
          onChange={handleChange(`panel${a.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls={`panel${a.id}bh-}content`}
            id={`panel${a.id}bh-header`}
          >
            <Typography className={classes.heading}>{a.title}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", flexDirection: "column" }}
          >
            {a.rack.map((items) => (
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <Typography style={{ fontSize: "0.8rem" }}>
                  {items.name}
                </Typography><hr style={{width:"65%", border: 0, borderBottom:"1px dotted lightgrey"}}/>
                <Typography style={{ fontSize: "0.8rem", whiteSpace:"nowrap" }}>
                  {items.value}
                </Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
