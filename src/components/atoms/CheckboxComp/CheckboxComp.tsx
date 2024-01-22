import { FormControlLabel, Checkbox } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles';

const CheckboxComp = (props: any) => {
    const {value} =  props;
    const styles = {
        root: {
            color: '#A5A5A6 !important',
            marginLeft: props.isMargin ? '15px' : '',
            padding: props.isMargin ? '10px' : '',
            marginTop: props.isMargin ? '0px' : ''
        },
        icon: {
            borderRadius: 0,
            backgroundColor: '#B4A9FF',
            fill: 'red'
        },
        checked: {
            '&$icon': {
                backgroundColor: 'red',
            },
            color: '#B4A9FF !important'
        },
    };

    const [checked, setChecked] = useState(value ? value : false);
    const StyledCheckbox = withStyles(styles)(Checkbox);
    const handleChange = ($event : any) => {
        setChecked($event.target.checked);
        props.onChange($event.target.checked)
    };

    return (
        <FormControlLabel
            control={<StyledCheckbox value={checked} checked={checked} onChange={handleChange} />}
            label=""
        />
    )
}

export default CheckboxComp

