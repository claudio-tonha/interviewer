import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { RootState } from '../../../../../store';
import copy from 'copy-to-clipboard';

const InterviewCopy = () => {

    const { questions } = useSelector((state: RootState) => state.interview);

    const handleCopyToClipboard = () => {
        const content = questions.map(x => {
            let result = `${x.question}\n${x.feedback}`;
            if (x.status !== undefined) {
                result += `\nCould answer? ${x.status}`
            }

            return result;
        }).join("\n\n")
        copy(content);
    }

    return (
        <Button
            style={{ display: 'flex', alignSelf: 'start' }}
            variant='contained'
            onClick={() => handleCopyToClipboard()}>COPY FEEDBACK TO CLIPBOARD</Button>
    )
}

export default InterviewCopy;