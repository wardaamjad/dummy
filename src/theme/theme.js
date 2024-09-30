// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#9259be', // Custom Primary Color
//     },
//     secondary: {
//       main: '#ff4081', // Custom Secondary Color
//     },
//   },
//   typography: {
//     h1: {
//       fontSize: '2.5rem',
//       fontWeight: 600,
//     },
//     body1: {
//       fontSize: '6rem',
//     },
//   },
//   // components: {
//   //   MuiButton: {
//   //     styleOverrides: {
//   //       root: {
//   //         background: 'linear-gradient(45deg, black 30%, #FF8E53 45%)',
//   //         color: 'white',
//   //       },
//   //     },
//   //   },
//   //   },
//     Muidiv: {
//       styleOverrides: {
//         root: {
//           background: 'linear-gradient(45deg, black 30%, #21CBF3 90%)', // Example for AppBar
//         },
//       },
//     },
// });

import { createTheme } from '@mui/material/styles';

const customColors = [
'#070707','#374E70',
'#120A4A','#7850FF',
// '#7850FF','#120A4A',
'#00066D','#00A3FF',
// '#00A3FF','#00066D',
'#6C0834','#E7264E',
// '#E7264E','#6C0834',
'#4D04A9','#9F036D',
// '#9F036D','#4D04A9',
'#0A3E56','#108FA2',
// '#108FA2','#0A3E56',
'#9259BE','#432958',
'#009FC5','#034054',
'#BB60F9','#1E0D55',
// '#BB60F9','#1E0D55',
];
const customGradiants = {
  defaultGradiants:`linear-gradient(45deg, ${customColors[1]}, ${customColors[0]})`,
  casinoNavGradiant:`linear-gradient(45deg, ${customColors[3]}, ${customColors[2]})`,
  sportsNavGradiant:`linear-gradient(45deg, ${customColors[5]}, ${customColors[4]})`,
  actionNavGradiant:`linear-gradient(45deg, ${customColors[7]}, ${customColors[6]})`,
  racingNavGradiant:`linear-gradient(45deg, ${customColors[9]}, ${customColors[8]})`,
  minecraftNavGradiant:`linear-gradient(45deg, ${customColors[11]}, ${customColors[10]})`,
  // aboutusNavGradiant:`linear-gradient(45deg, ${customColors[12]}, ${customColors[12]})`,
  // contactusNavGradiant:`linear-gradient(45deg, ${customColors[15]}, ${customColors[14]})`,
  // FAQsNavGradiant:`linear-gradient(45deg, ${customColors[17]}, ${customColors[16]})`,
  // defaultbodyGradiant:'radial-gradient(circle, #070707, #374E70)',
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
      aboutusNavGradiant: customGradiants.aboutusNavGradiant,
      contactusNavGradiant: customGradiants.contactusNavGradiant,
      FAQsNavGradiant: customGradiants.FAQsoNavGradiant,
      // defaultBodyGradiant: customGradiants.defaultBodyGradiant,
      casinoBodyGradiant: customGradiants.casinoBodyGradiant,
      sportsBodyGradiant: customGradiants.sportsBodyGradiant,
      actionBodyGradiant: customGradiants.actionBodyGradiant,
      racingBodyGradiant: customGradiants.racingBodyGradiant,
      minecraftBodyGradiant: customGradiants.minecraftBodyGradiant,
      aboutusBodyGradiant: customGradiants.aboutusBodyGradiant,
      contactusBodyGradiant: customGradiants.contactusBodyGradiant,
      FAQsBodyGradiant: customGradiants.FAQsBodyGradiant,
    },
    
  },
  
});

export default theme;
