import { FormControl, FormLabel, TextareaAutosize } from "@mui/material";
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from "../../../../../store";
import { updateFeedback } from "../../../interview.slice";

const InterviewFeedback = () => {

    const dispatch = useAppDispatch();

    const feedback = useSelector((state: RootState) => state.interview.feedback);

    const handleChange = (e: any) => {
        dispatch(updateFeedback(e.currentTarget.value))
    }

    return (
        <FormControl style={{ width: '100%' }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ alignSelf: 'start' }}>Feedback</FormLabel>
            <TextareaAutosize
                placeholder='Enter feedback here'
                minRows={20}
                style={{ width: '100%', resize: 'none', padding: '5px', overflow: 'auto', maxHeight: '300px', outline: 'none' }}
                onChange={handleChange}
                value={feedback}
            />
        </FormControl>
    )
}

export default InterviewFeedback;