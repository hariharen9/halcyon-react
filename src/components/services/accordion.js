import React from "react";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import "./accordion.css";
const Accordion = withStyles({
  root: {
    font: "Poppins",
    fontSize: "72px",
    border: "0px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "0px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "20px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  // const [expanded, setExpanded] = React.useState("panel1");
  let [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="accordion-text" id="text-branding">
            Branding
            <ExpandMoreOutlinedIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left">
            A brand today is all about how it makes your customers feel. It's
            not a logo, visual identity, or digital product design. but rather a
            cohesive system that spans across all mediums and touchpoints. We're
            a branding agency offering a complete solution from naming and logo
            design to communications and style guides.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="accordion-text">
            User Experience
            <ExpandMoreOutlinedIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left" className="interior-acc">
            UI/UX design is a defining factor for any digital product these
            days. We're a user experience and UI design agency focused on
            improving conversion and increasing customer engagement. Our UI/UX
            design capabilities don't stop at mobile apps, web applications, or
            multi‑platform digital experiences. As a UX design agency, we create
            products and services that provide outstanding usability while fully
            embracing your brand's personality.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="accordion-text">
            Development
            <ExpandMoreOutlinedIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left">
            Our full‑stack design and development agency based in Coimbatore
            provides front‑end and back‑end development services working closely
            with our designers. As a UX UI and app development company, we build
            native mobile apps for iOS and Android, web applications, apps for
            wearables, and B2B/enterprise software.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className="accordion-text">
            Web Design
            <ExpandMoreOutlinedIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="left">
            We're a web design agency creating next‑level websites by
            strategically blending user experience and brand storytelling. Our
            web designers and developers create responsive websites that feel at
            home on any device. Product landing pages, marketing sites, or UX UI
            for company intranet portals – we do it all.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
