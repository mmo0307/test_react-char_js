import React, {useState} from 'react';
import './form_style.scss';
import 
{ 
    TextField, 
    Grid, 
    FormControl, 
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';

import {LineChar} from '../charts/LineChar';
import {BarChar} from '../charts/BarChar.jsx';
import {DoughnutChar} from '../charts/DoughnutChar.jsx';

export default function Form() {
    const [x_axis, setXAsis] = useState('');
    const [y_axis, setYAsis] = useState('');
    const [type_char, setTypeChar] = useState('');

    const [errorX, setErrorX] = useState(false);
    const [errorY, setErrorY] = useState(false);
    const error = 'Field can`t be empty';

    const error_radio_btn = 'Fields can`t be empty!';
    const [errorRadio, setErrorRadio] = useState(false);

    const handleChangeX = e => {
        setXAsis(e.target.value);
        if(e.target.value === ''){
            setErrorX(true);
        } else 
            setErrorX(false);
    }

    const handleChangeY = e => {
        setYAsis(e.target.value);
        if(e.target.value === ''){
            setErrorX(true);
        } else 
            setErrorX(false);
    }

    const selectRadioButton = e => {
        if((x_axis && y_axis) === ''){
            setErrorRadio(true);
        } else {
            setErrorRadio(false);
            setTypeChar(e.target.value);
        }
    }

    const view = (type_char, x_axis, y_axis) => {
        switch(type_char){
            case 'line': 
                return <LineChar x_axis={x_axis} y_axis={y_axis}/>;
            case 'bar': 
                return <BarChar x_axis={x_axis} y_axis={y_axis}/>;
            case 'doughnut': 
                return <DoughnutChar x_axis={x_axis} y_axis={y_axis}/>;
            default: 
                return;
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'axis_x':
                if(e.target.value === ''){
                    setErrorX(true);
                } else 
                    setErrorX(false);
                break;
            case 'axis_y':
                if(e.target.value === ''){
                    setErrorY(true);
                } else 
                    setErrorY(false);
                break;
            default: return;
        }
    }

  return (
    <Grid
        className='box-form'
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center">

        <Grid className='input-box'>
            <TextField 
                name='axis_x'
                id="outlined-basic" 
                label="X axis labels" 
                variant="outlined" 
                placeholder="X axis labels"
                onChange={handleChangeX}
                onBlur={e => blurHandler(e)}
            />
            {(errorX) && <div style={{color:'red'}}>{error}</div>}
        </Grid>
        
        <Grid className='input-box'>
            <TextField 
                name='axis_y'
                id="outlined-basic" 
                label="Y axis labels" 
                variant="outlined"
                placeholder="Y axis labels"
                onChange={handleChangeY}
                onBlur={e => blurHandler(e)}
            />
            {(errorY) && <div style={{color:'red'}}>{error}</div>}
        </Grid>
            
        <Grid className='input-box'>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Chars</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="chars"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="line" control={<Radio />} label="Line" onChange={selectRadioButton}/>
                    <FormControlLabel value="bar" control={<Radio />} label="Bar" onChange={selectRadioButton}/>
                    <FormControlLabel value="doughnut" control={<Radio />} label="Doughnut" onChange={selectRadioButton}/>
                </RadioGroup>
            </FormControl>
            {(errorRadio) && <div style={{color:'red'}}>{error_radio_btn}</div>}
        </Grid>

        <Grid item width={700}>
            {view(type_char, x_axis, y_axis)}
        </Grid>
    </Grid>
  )
}
