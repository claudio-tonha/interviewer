import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestions } from '../../../../../interview.slice';
import { Button } from '@mui/material'

const InterviewSource = () => {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        setContent(e.currentTarget.value);
    }

    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <TextareaAutosize
            placeholder='ADD QUESTIONS HERE'
            minRows={20}
            style={{ width: '100%', resize: 'none', padding: '5px', overflow: 'auto', maxHeight: '300px', outline: 'none' }}
            onChange={handleChange}
            value={content}
        />
        <Button style={{ display: 'flex', alignSelf: 'start' }} variant='contained' onClick={() => dispatch(addQuestions(content))}>START</Button>
    </div>;
}

export default InterviewSource;
