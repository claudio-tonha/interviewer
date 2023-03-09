import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateScore, IInterviewResult } from '../../pages/home/interview.slice';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';

interface IFeedbackLevelOptionsProps {
    question: IInterviewResult
}

const FeedbackLevelOptions = ({ question }: IFeedbackLevelOptionsProps) => {

    const dispatch = useDispatch();

    const scoringOptions = useSelector((state: RootState) => state.settings.scoringOptions);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateScore({ id: question.id, score: (event.target as HTMLInputElement).value }));
    };

    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={question.score}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                {scoringOptions.split("\n").map(x => <FormControlLabel value={x} control={<Radio />} label={x} />)}
            </RadioGroup>
        </FormControl>
    );
}

export default FeedbackLevelOptions;