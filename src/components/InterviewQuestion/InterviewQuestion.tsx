import TextareaAutosize from '@mui/base/TextareaAutosize';
import { changeFeedback, IInterviewResult } from '../../pages/home/interview.slice';
import { useDispatch, useSelector } from 'react-redux'
import FeedbackLevelOptions from '../FeedbackLevelOptions/FeedbackLevelOptions';
import { Typography } from '@mui/material'
import { RootState } from '../../store';

interface InterviewQuestionProps {
    question: IInterviewResult
}

const InterviewQuestion = ({ question }: InterviewQuestionProps) => {

    const dispatch = useDispatch();

    const levelEnabled = useSelector((state: RootState) => state.interview.levelEnabled);

    const handleChange = (e: any) => {
        dispatch(changeFeedback({ id: question.id, feedback: e.currentTarget.value }));
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        }}>
            <Typography variant='h6'>{`${question.id}. ${question.question}`}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                <TextareaAutosize
                    style={{ resize: 'none', outline: 'none' }}
                    minRows={3}
                    cols={100}
                    onChange={handleChange}
                    value={question.feedback}
                />
                {levelEnabled && <FeedbackLevelOptions question={question} />}
            </div>
        </div>
    )
}

export default InterviewQuestion;
