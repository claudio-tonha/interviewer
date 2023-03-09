import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store';
import Typography from '@mui/material/Typography';
import InterviewQuestion from '../../../../../components/InterviewQuestion';

const InterviewQuestions = () => {

    const { questions } = useSelector((state: RootState) => state.interview);

    return (
        <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
            {
                questions.length
                    ? questions.map(x => <InterviewQuestion key={x.id} question={x} />)
                    : <div style={{
                        height: "calc(100vh - 48px)", display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}><Typography variant="h6">ADD QUESTIONS IN THE SETTINGS PAGE</Typography></div>
            }
        </div>
    )
}

export default InterviewQuestions;