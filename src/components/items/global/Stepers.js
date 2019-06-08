import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Fundamentos Javascript',
        imgPath:
        'https://i.imgur.com/9gJsZJ3.png',
    },
    {
        label: 'Matemática discreta - Teoria dos Conjuntos',
        imgPath:
        'https://i.imgur.com/ZM8Mp0o.png',
    },
    {
        label: 'Representações de números de ponto flutuante',
        imgPath:
        'https://i.imgur.com/VuKaEBI.jpg',
    },
    ];

    const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper() {
const classes = useStyles();
const theme = useTheme();
const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = tutorialSteps.length;

function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
}

function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
}

function handleStepChange(step) {
    setActiveStep(step);
}

return (
    <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        >
        {tutorialSteps.map((step, index) => (
            <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
            </div>
        ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
        }
        backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            
            </Button>
        }
        />
    </div>
);
}

export default SwipeableTextMobileStepper;