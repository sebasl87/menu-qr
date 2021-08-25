import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  const acordiones = [
    { id: 0, title: "Nuestros Tostados Caseros", rack: "Prueba" },
    { id: 1, title: "Milshake", rack: "Prueba1" },
    { id: 2, title: "Licuados y Jugos Naturales", rack: "Prueba1" },
    { id: 0, title: "Nuestros Tostados Caseros", rack: "Prueba" },
    { id: 1, title: "Milshake", rack: "Prueba1" },
    { id: 2, title: "Licuados y Jugos Naturales", rack: "Prueba1" },
    { id: 0, title: "Nuestros Tostados Caseros", rack: "Prueba" },
    { id: 1, title: "Milshake", rack: "Prueba1" },
    { id: 2, title: "Licuados y Jugos Naturales", rack: "Prueba1" },
    { id: 0, title: "Nuestros Tostados Caseros", rack: "Prueba" },
    { id: 1, title: "Milshake", rack: "Prueba1" },
    { id: 2, title: "Licuados y Jugos Naturales", rack: "Prueba1" },
    { id: 2, title: "Licuados y Jugos Naturales", rack: "Prueba1" },

  ];
  return (
    <div className={classes.root}>
        {acordiones.map(a=>
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
              <Typography className={classes.heading}>
                {a.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {a.rack}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )}
      {/* <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Nuestros Tostados Caseros
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            repudiandae accusamus deleniti incidunt at, nisi nihil provident
            itaque consectetur eos minus illo amet ratione rerum fuga aspernatur
            in eum, repellendus deserunt veniam magnam placeat odio. Impedit
            voluptas autem illum cupiditate, sapiente tempore ducimus? Quibusdam
            repellat maxime laboriosam modi consequuntur eveniet aliquam
            explicabo et voluptates pariatur natus veritatis eius quidem maiores
            voluptatibus accusantium quo officiis temporibus sapiente nihil, non
            distinctio recusandae nulla? Fugiat eaque rerum quae adipisci, quis
            accusantium cupiditate possimus ullam, blanditiis explicabo sit
            nihil voluptas accusamus reprehenderit magnam deserunt officiis.
            Natus, doloribus eveniet? Id blanditiis enim, debitis perferendis
            voluptas dolorem iure ut quaerat architecto suscipit ratione ab quas
            culpa placeat sit itaque beatae neque cumque, eveniet quis autem,
            asperiores recusandae natus? Porro unde nobis incidunt ut explicabo
            sed exercitationem dicta eligendi voluptatem doloremque voluptas
            voluptates, fugit veniam aperiam provident iure officia
            necessitatibus error consequuntur illo at aut minima ad? Nostrum
            eius ea voluptatem similique, recusandae nisi repellat molestias
            explicabo voluptas atque commodi illum ipsa magnam at provident amet
            velit placeat pariatur possimus quam odit illo accusamus. Excepturi
            sunt accusantium dignissimos consequuntur voluptates, quaerat, saepe
            repellat ducimus numquam ratione facilis dolore iste id inventore ex
            fuga blanditiis tempore. Odio, minus. Optio voluptate quas,
            necessitatibus maiores facilis assumenda molestiae eveniet cum
            magnam! Doloribus enim consequuntur ducimus accusamus aperiam dolor
            beatae quas, aspernatur quisquam natus fugiat adipisci aliquid!
            Eligendi maiores cum obcaecati repellendus voluptate expedita
            dolores totam, architecto ut suscipit dignissimos et corrupti fuga,
            praesentium animi. Delectus, esse? In ex unde iusto magnam!
            Voluptates ad ullam cupiditate aut perferendis eius maxime at
            dolore, repudiandae deserunt dignissimos sunt nam officia molestiae
            ea esse tenetur harum eveniet nihil molestias odio quae cum dolor.
            Sapiente laboriosam molestias magnam, nisi totam quidem est deserunt
            vitae neque iure eveniet quod odio saepe error culpa, voluptatibus
            eligendi veritatis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
