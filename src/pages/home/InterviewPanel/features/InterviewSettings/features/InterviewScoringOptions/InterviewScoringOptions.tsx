
import { Button, TextareaAutosize } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RootState } from '../../../../../../../store';
import { useDispatch, useSelector } from 'react-redux'
import { updateScoringOptions } from '../../../../../settings.slice';
import InterviewScoreLabel from '../InterviewScoreLabel';

const InterviewScoringOptions = () => {

    const dispatch = useDispatch();
    const scoringOptions = useSelector((state: RootState) => state.settings.scoringOptions);

    const handleChange = (e: any) => {
        dispatch(updateScoringOptions(e.currentTarget.value));
    }

    const handleChangeNumberScore = () => {
        dispatch(updateScoringOptions("0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10"));
    }

    const handleChangeTextScore = () => {
        dispatch(updateScoringOptions("Poor\nGood\nExcellent"));
    }

    const handleChangeEmojiScore = () => {
        dispatch(updateScoringOptions("😔\n😛\n🤩"));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" style={{ alignSelf: 'start' }}>2. Score Label</FormLabel>
                <InterviewScoreLabel />
            </FormControl>
            <FormLabel id="demo-radio-buttons-group-label" style={{ alignSelf: 'start' }}>3. Scoring Options</FormLabel>
            <div style={{ display: 'flex', gap: '5px' }}>
                <Button
                    style={{ display: 'flex', alignSelf: 'start' }}
                    variant='contained'
                    onClick={handleChangeNumberScore}
                >0 - 10</Button>
                <Button
                    style={{ display: 'flex', alignSelf: 'start' }}
                    variant='contained'
                    onClick={handleChangeTextScore}
                >Poor - Excellent</Button>
                <Button
                    style={{ display: 'flex', alignSelf: 'start' }}
                    variant='contained'
                    onClick={handleChangeEmojiScore}
                >😔 😛 🤩</Button>
            </div>
            <FormControl>
                <TextareaAutosize
                    placeholder='Enter Scoring Options'
                    minRows={6}
                    style={{ width: '100%', resize: 'none', padding: '5px', overflow: 'auto', maxHeight: '90px', outline: 'none' }}
                    onChange={handleChange}
                    value={scoringOptions}
                />
            </FormControl>
        </div>
    )
}

export default InterviewScoringOptions;