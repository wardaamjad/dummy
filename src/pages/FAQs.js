import React, { useState } from 'react';
import { Grid, Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { useTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import bgimage from '../assets/faqsbg.png';
import panel from '../assets/-icon.png';
import panel1 from '../assets/+icon.png';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CustomAccordion = styled(Accordion)(({ theme, expanded  }) => ({
    background: 'rgba(255, 255, 255, 0.18)',
    color:'rgba(255, 255, 255, 0.99)',
    opacity: 0.99,
    border: expanded ? '1px solid black' : 'none',
    // boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: expanded ? '5px' : 'none',
    // marginBottom: '0',
// border: "1px solid black",
    '&:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary': {
      borderRadius: '50px', // Rounded top corners
      '&.Mui-expanded': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
  }));
const FAQs = () => {
    const bgImage = bgimage; // Background image path
    const gameName = "FAQs";
    const [expanded, setExpanded] = useState(false);
    const [iconExpanded, setIconExpanded] = useState(null); 
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        setIconExpanded(isExpanded ? panel : null);
      };
    const theme = useTheme();
  return (
    <>
    <ResponsiveAppBar />
            <div
                style={{
                    backgroundImage: `url(${bgImage})`, // Background image passed from the parent
                    backgroundSize: "cover",
                    padding: "1rem",
                }}
            >
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ color: "white" }}>{gameName}</h1>{" "}
                    {/* Game name from parent */}
                    <Container maxWidth={"md"}>
                        <div
                            style={{
                                padding: "2rem 0",
                                backgroundColor: "#fff",
                                borderRadius: "0.625rem",
                                border: "1px solid",
                            }}
                        ></div>
                    </Container>
                </div>
            </div>
            
            <Grid
        container
        sx={{
          marginTop: "0px !Important",
          padding: "6rem 3rem",
          background: theme.palette.gradients.FAQsBodyGradiant,
        }}
      >
        <Box sx={{   maxWidth: 1000, margin: 'auto',borderRadius: '5px',  border: expanded ? 'none' : '1px solid black', }}>
        <CustomAccordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary expandIcon={expanded === 'panel1' ? <RemoveIcon sx={{ color: 'white'}}/> : <AddIcon sx={{ color: 'white'}}/>}>
            <Typography variant="h6">What is Mars colonization, and why are humans planning to establish a presence on Mars?</Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Typography>
            Mars colonization involves establishing a permanent human presence on Mars to explore, research, and potentially live. 
            The goal is to ensure humanity's survival and discover new scientific opportunities.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary expandIcon={expanded === 'panel2' ? <RemoveIcon sx={{ color: 'white'}}/> : <AddIcon sx={{ color: 'white'}}/>}>
            <Typography variant="h6">What is Mars colonization, and why are humans planning to establish a presence on Mars?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Humans will need life support systems, habitats, and reliable resources like water, oxygen, and food to survive. 
            Challenges include extreme temperatures, radiation, and isolation.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
            <AccordionSummary expandIcon={expanded === 'panel3' ? <RemoveIcon sx={{ color: 'white'}}/> : <AddIcon sx={{ color: 'white'}}/>}>
            <Typography variant="h6">How will colonization affect Mars' environment and potential for future scientific research?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Colonization may impact Mars' environment by introducing new biological and technological elements, which could affect 
            future research and planetary protection efforts.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>

        <CustomAccordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
            <AccordionSummary expandIcon={expanded === 'panel4' ? <RemoveIcon sx={{ color: 'white'}}/> : <AddIcon sx={{ color: 'white'}}/>}>
            <Typography variant="h6">What are the timelines and international cooperation involved in Mars colonization?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
            Mars colonization is a complex project that requires decades of research, international cooperation, and technological advances.
            </Typography>
            </AccordionDetails>
        </CustomAccordion>
        </Box>
        </Grid>
    <Footer />
    </>
  );
};
export default FAQs;
