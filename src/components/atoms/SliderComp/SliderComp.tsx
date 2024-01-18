import { Slider } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react'
function valuetext(value: number) {
  return `${value}°C`;
}

const useStyles = makeStyles({
  root: {
    color: '#6C5DD3',
  },
  thumb: {
    backgroundColor: '#6C5DD3',
    width: 23,
    height: 23,
    border: '3px solid #B4A9FF',
    borderRadius: 5
  },
  rail: {
    backgroundColor: '#3A3A3D',
  },
});
const SliderComp = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.totalAmount ? props.totalAmount : 0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.totalAmount)
  }, [props]);

  const sliderStyle = {
    width: '280px',
    height: '8px'
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
        max={500000}
        onChange={handleChange}
      />
    </div >
  )
}

export default SliderComp
