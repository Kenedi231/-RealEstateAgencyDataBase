import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextInput(props) {
    const {
        input: { value, onChange },
        label,
        password,
    } = props;

    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={value}
            onChange={onChange}
            type={password ? 'password' : 'text'}
            fullWidth
        />
    );
}