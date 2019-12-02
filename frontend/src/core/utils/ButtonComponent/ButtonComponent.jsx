import React from 'react';
import './ButtonComponentStyles.css';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    buttonColorActiveStyle: {
        backgroundColor: '#979797',
    },
    buttonColorStyle: {
        backgroundColor: '#873da0',
        "&:hover": {
            backgroundColor: '#512862'
        },
        color: 'white',
    },
    progressStyle: {
        color: '#512862',
    },
}));

export default function ButtonComponent(props) {
    const classes = useStyles();
    const {loading, disabled, text, onClick} = props;
    const onButtonClick = () => {
        onClick && onClick();
    };

    return (
        <Button
            variant="contained"
            color="inherit"
            type='submit'
            className={['button', loading ? classes.buttonColorActiveStyle : classes.buttonColorStyle]}
            disabled={loading || disabled}
            onClick={onButtonClick}
        >
            {loading ? (
                <CircularProgress size={26} className={classes.progressStyle} />
            ) : (
                <div>{text}</div>
            )}
        </Button>
    )
}