import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux'
import { toggleLevelEnabled } from '../../../../../interview.slice';
import { RootState } from '../../../../../../../store';

const InterviewLevelOptions = () => {
    const dispatch = useDispatch();
    const { levelEnabled } = useSelector((state: RootState) => state.interview);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleLevelEnabled());
    };

    return <div style={{ display: 'flex' }}>
        <FormControlLabel
            label="Enable feedback level"
            control={<Checkbox checked={levelEnabled} onChange={handleChange} />}
        />

    </div>
}

export default InterviewLevelOptions;