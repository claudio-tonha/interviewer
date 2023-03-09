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
            alignItems: 'start',
            borderBottom: '1px solid #ddd',
            paddingBottom: '20px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h6' style={{ marginBottom: '20px', alignSelf: 'start' }}>{`${question.id}. ${question.question}`} </Typography>
                    <TextareaAutosize
                        style={{ resize: 'none', outline: 'none' }}
                        minRows={3}
                        cols={100}
                        onChange={handleChange}
                        value={question.feedback}
                    />
                </div>
                {levelEnabled && <FeedbackLevelOptions question={question} />}
            </div>
        </div>
    )
}

export default InterviewQuestion;
