import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { changeLevel, eFeedbackLevel, IInterviewResult } from '../../pages/home/interview.slice';
import { useDispatch } from 'react-redux'

interface IFeedbackLevelOptionsProps {
    question: IInterviewResult
}

const FeedbackLevelOptions = ({ question }: IFeedbackLevelOptionsProps) => {

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLevel({ id: question.id, status: (event.target as HTMLInputElement).value as eFeedbackLevel }));
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Level</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={question.status}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                <FormControlLabel value={eFeedbackLevel.BEGINNER} control={<Radio />} label={eFeedbackLevel.BEGINNER} />
                <FormControlLabel value={eFeedbackLevel.INTERMEDIATE} control={<Radio />} label={eFeedbackLevel.INTERMEDIATE} />
                <FormControlLabel value={eFeedbackLevel.EXPERT} control={<Radio />} label={eFeedbackLevel.EXPERT} />
            </RadioGroup>
        </FormControl>
    );
}

export default FeedbackLevelOptions;