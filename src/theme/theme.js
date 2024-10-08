

import { createTheme } from '@mui/material/styles';

const customColors = [
'#070707','#374E70',
'#120A4A','#7850FF',
// '#272A30','#120A4A',
'#00066D','#00A3FF',
// '#00A3FF','#00066D',
'#6C0834','#E7264E',
// '#E7264E',
'#4D04A9','#9F036D',
'#0A3E56','#108FA2',
'#9259BE','#432958',
'#009FC5','#034054',
'#BB60F9','#1E0D55',
'#FFFFFF','#FFFFFFBF',
'black','#FF7A7A','#FF0000',
'#272A30','#00E0FF',
'#272727','#8D8D8D'
];
const customGradiants = {
  defaultGradiants:`linear-gradient(45deg, ${customColors[1]}, ${customColors[0]})`,
  casinoNavGradiant:`linear-gradient(45deg, ${customColors[3]}, ${customColors[2]})`,
  sportsNavGradiant:`linear-gradient(45deg, ${customColors[5]}, ${customColors[4]})`,
  actionNavGradiant:`linear-gradient(45deg, ${customColors[7]}, ${customColors[6]})`,
  racingNavGradiant:`linear-gradient(45deg, ${customColors[9]}, ${customColors[8]})`,
  minecraftNavGradiant:`linear-gradient(45deg, ${customColors[11]}, ${customColors[10]})`,
  casinoBodyGradiant:`radial-gradient(circle, ${customColors[3]}, ${customColors[2]})`,
  sportsBodyGradiant:`radial-gradient(circle, ${customColors[5]}, ${customColors[4]})`,
  actionBodyGradiant:`radial-gradient(circle, ${customColors[7]}, ${customColors[6]})`,
  racingBodyGradiant:`radial-gradient(circle, ${customColors[9]}, ${customColors[8]})`,
  minecraftBodyGradiant:`radial-gradient(circle, ${customColors[11]}, ${customColors[10]})`,
  aboutusBodyGradiant:`radial-gradient(circle, ${customColors[12]}, ${customColors[13]})`,
  contactusBodyGradiant:`radial-gradient(circle, ${customColors[14]}, ${customColors[15]})`,
  FAQsBodyGradiant:`radial-gradient(circle, ${customColors[16]}, ${customColors[17]})`,
};



const theme = createTheme({
  palette: {
    primary: {
      main: customColors[0],
      defaultGradiant : customColors[1], 
      casinoGradiant1 : customColors[2],
      casinoGradiant2 : customColors[3],
      sportsGradiant1 : customColors[4],
      sportsGradiant2 : customColors[5],
      actionGradiant1 : customColors[6],
      actionGradiant2 : customColors[7],
      racingGradiant1 : customColors[8],
      racingGradiant2 : customColors[9],
      minecraftGradiant1 : customColors[10],
      minecraftGradiant2 : customColors[11],
      aboutusGradiant1 : customColors[12],
      aboutusGradiant2 : customColors[13],
      contactusGradiant1 : customColors[14],
      contactusGradiant2 : customColors[15],
      FAQsGradiant1 : customColors[16],
      FAQsGradiant2 : customColors[17],
    },
    gradients: {
      defaultGradiants: customGradiants.defaultGradiants,
      casinoNavGradiant: customGradiants.casinoNavGradiant,
      sportsNavGradiant: customGradiants.sportsNavGradiant,
      actionNavGradiant: customGradiants.actionNavGradiant,
      racingNavGradiant: customGradiants.racingNavGradiant,
      minecraftNavGradiant: customGradiants.minecraftNavGradiant,
      casinoBodyGradiant: customGradiants.casinoBodyGradiant,
      sportsBodyGradiant: customGradiants.sportsBodyGradiant,
      actionBodyGradiant: customGradiants.actionBodyGradiant,
      racingBodyGradiant: customGradiants.racingBodyGradiant,
      minecraftBodyGradiant: customGradiants.minecraftBodyGradiant,
      aboutusBodyGradiant: customGradiants.aboutusBodyGradiant,
      contactusBodyGradiant: customGradiants.contactusBodyGradiant,
      FAQsBodyGradiant: customGradiants.FAQsBodyGradiant,
    },
    text: {
      main: customColors[18],
      grey : customColors[19],
    },
    favourite: {
      black : customColors[20],
      Pink : customColors[21],
      Red : customColors[22],
    },
    button: {
      blue : customColors[24],
      black : customColors[23],
    },
    video: {
      lightgrey : customColors[25],
    },
    form: {
      lightgrey : customColors[26],
    },
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       my: 2,
    //       color: customColors[18], // white text
    //       display: 'block',
    //       border: '1px solid transparent', // Initial border state
    //       transition: '0.3s', // Smooth transition for hover effect
    //       position: 'relative', // Required for inner shadow effect
    //       "&:hover": {
    //         border: `1px solid ${customColors[24]}`, // Neon blue border color
    //         mixBlendMode: "screen",
    //         backgroundColor: customColors[23], // Black background on hover
    //       },
    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: customColors[20], // Black background
          color: customColors[18], // White text color
          borderRadius: '13px', // Rounded corners
          padding: '7px',
           // Padding inside the card
          // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Subtle shadow for elevation
          position: 'relative', // For positioning the heart icon
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Slightly rounded image
          width: '100%', // Full width of the card
          height: 'auto', // Auto height based on image aspect ratio
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // h6: {
        //   fontFamily: 'Poppins, sans-serif',
        //   fontSize: '8px', // Bold title
        //   fontWeight: 500,
        //   color: customColors[18], // White color for the title
        //   marginTop: '8px',
        //   marginLeft: '0px', // Spacing between image and title
        // },
        body2: {
          fontSize: '13px', // Smaller description text
          color: customColors[19], // Greyish color for description
          marginTop: '4px', // Spacing between title and description
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '17px',  // Set the desired padding
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          position: 'absolute',
          top: '6px', // Top-right corner
          right: '6px',
          color: customColors[18],
          // background: customColors[18],

           // White color for the heart icon
        },
      },
    },
  },
});

export default theme;
