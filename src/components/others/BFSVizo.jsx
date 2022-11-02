import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import Img1 from '../../image/BFS/graph-bfs-step-0.webp'

const steps = [
  {
    label: "Step 1",
    imgPath: {Img1}
  },
  {
    label: "Step 2",
    imgPath: "http://placekitten.com/199/199"
  },
  {
    label: "Step 3",
    imgPath: "http://placekitten.com/201/201"
  }
];
export default function BFSVizo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <div>
      <Paper square elevation={0}>
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <img src={steps[activeStep].imgPath} alt={steps[activeStep].label} />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}