import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useSelector } from 'react-redux';
import { updateQuestions, updateTab } from '../../../../../settings.slice';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RootState, useAppDispatch } from '../../../../../../../store';

const InterviewSource = () => {

    const dispatch = useAppDispatch();
    const questions = useSelector((state: RootState) => state.settings.questions);

    const handleChange = (e: any) => {
        dispatch(updateQuestions(e.currentTarget.value))
    }

    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <FormControl style={{ width: '100%' }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ alignSelf: 'start' }}>1. Questions</FormLabel>
            <TextareaAutosize
                placeholder='Enter questions here (one per line)'
                minRows={20}
                style={{ width: '100%', resize: 'none', padding: '5px', overflow: 'auto', maxHeight: '300px', outline: 'none' }}
                onChange={handleChange}
                value={questions}
            />
        </FormControl>
    </div>;
}

export default InterviewSource;
