import { TextField } from "@mui/material"
import { RootState } from "../../../../../../../store";
import { useDispatch, useSelector } from 'react-redux'
import { updateScoreLabel } from "../../../../../settings.slice";

const InterviewScoreLabel = () => {

    const dispatch = useDispatch();

    const scoreLabel = useSelector((state: RootState) => state.settings.scoreLabel);

    const handleChange = (e: any) => {
        dispatch(updateScoreLabel(e.currentTarget.value));
    }

    return <TextField placeholder="Result, Answer, etc (optional)" onChange={handleChange} value={scoreLabel}></TextField>
}

export default InterviewScoreLabel;