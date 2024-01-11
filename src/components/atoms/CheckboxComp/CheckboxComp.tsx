import { FormControlLabel, Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
        color: '#A5A5A6', // Change the color of the checkbox
    },
    icon: {
        borderRadius: 0, // Change to 0 for a square checkbox
        backgroundColor: '#B4A9FF', // Change the background color of the checkbox
        fill : 'red'
    },
    checked: {
        '&$icon': {
            backgroundColor: 'red', // Change the background color of the checked checkbox
        },
        color : '#B4A9FF !important'
    },
};

const CheckboxComp = () => {
    const [checked, setChecked] = useState(false);
    const StyledCheckbox = withStyles(styles)(Checkbox);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <div>
            <FormControlLabel
                control={<StyledCheckbox checked={checked} onChange={handleChange} />}
                label=""
            />
        </div>
    )
}

export default CheckboxComp

