import { IInterviewResult } from '../../pages/home/interview.slice';
import { Typography } from '@mui/material'
import FeedbackLevelOptions from '../FeedbackLevelOptions/FeedbackLevelOptions';

interface InterviewQuestionProps {
    question: IInterviewResult
}

const InterviewQuestion = ({ question }: InterviewQuestionProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            borderBottom: '1px solid #ddd',
            paddingBottom: '20px'
        }}>
            <Typography variant='h6' style={{ marginBottom: '20px', alignSelf: 'start' }}>{`${question.id}. ${question.question}`} </Typography>
            <FeedbackLevelOptions question={question} />
        </div>
    )
}

export default InterviewQuestion;
