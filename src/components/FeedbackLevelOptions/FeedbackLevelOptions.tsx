import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { changeLevel, eAnswerType, IInterviewResult } from '../../pages/home/interview.slice';
import { useDispatch } from 'react-redux'

interface IFeedbackLevelOptionsProps {
    question: IInterviewResult
}

const FeedbackLevelOptions = ({ question }: IFeedbackLevelOptionsProps) => {

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeLevel({ id: question.id, status: (event.target as HTMLInputElement).value as eAnswerType }));
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" style={{ alignSelf: 'start' }}>Could answer?</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={question.status}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                <FormControlLabel value={eAnswerType.YES} control={<Radio />} label={eAnswerType.YES} />
                <FormControlLabel value={eAnswerType.NO} control={<Radio />} label={eAnswerType.NO} />
                <FormControlLabel value={eAnswerType.PARTIALLY} control={<Radio />} label={eAnswerType.PARTIALLY} />
                <FormControlLabel value={eAnswerType.ONLY_GIVING_EXAMPLES} control={<Radio />} label={eAnswerType.ONLY_GIVING_EXAMPLES} />
            </RadioGroup>
        </FormControl>
    );
}

export default FeedbackLevelOptions;