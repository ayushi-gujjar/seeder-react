import { VolumeDown, VolumeUp } from '@material-ui/icons'
import { Stack, Slider } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
function valuetext(value: number) {
    return `${value}°C`;
}

const useStyles = makeStyles({
    root: {
      color: '#6C5DD3', // Change the color for non-selected area
    },
    thumb: {
      backgroundColor: '#6C5DD3', // Change the color for the selected thumb
      width: 23,
      height: 23,
      border : '3px solid #B4A9FF',
      borderRadius : 5
    },
    rail: {
      backgroundColor: '#3A3A3D', // Change the color for the non-selected rail
    },
  });
const SliderComp = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    const sliderStyle = {
        width : '280px',
        height : '8px'
    }
    return (
        <div>
            <Slider
            classes={{
                root: classes.root,
                thumb: classes.thumb,
                rail: classes.rail,
              }}
                style={sliderStyle}
                aria-label="Temperature"
                getAriaValueText={valuetext}
                color="secondary"
                value={value}
                onChange={handleChange}
            />
        </div >
    )
}

export default SliderComp
