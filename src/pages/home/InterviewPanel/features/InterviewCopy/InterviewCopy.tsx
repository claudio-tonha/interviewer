import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { RootState } from '../../../../../store';
import copy from 'copy-to-clipboard';

const InterviewCopy = () => {

    const questions = useSelector((state: RootState) => state.interview.questions);
    const feedback = useSelector((state: RootState) => state.interview.feedback);
    const scoreLabel = useSelector((state: RootState) => state.settings.scoreLabel);

    const handleCopyToClipboard = () => {
        const label = scoreLabel ? `${scoreLabel} ` : "";

        const content = questions.map(x => {
            let result = `${x.question}`;

            if (x.score !== undefined) {
                result += ` - ${label}${x.score}`
            }

            return result;
        }).join("\n");

        const result = `${content}\n\n${feedback}`

        copy(result);
    }

    return (
        <Button
            style={{ display: 'flex', alignSelf: 'start' }}
            variant='contained'
            onClick={() => handleCopyToClipboard()}>COPY FEEDBACK TO CLIPBOARD</Button>
    )
}

export default InterviewCopy;