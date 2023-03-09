import { Button, Tooltip } from "@mui/material"
import { useAppDispatch } from "../../../../../store"
import { addQuestions } from "../../../interview.slice"
import { eTab, updateTab } from "../../../settings.slice"
import InterviewSource from "./features/InterviewQuestionsSource"
import InterviewScoringOptions from "./features/InterviewScoringOptions"
import InfoIcon from '@mui/icons-material/Info';

const InterviewSettings = () => {

    const dispatch = useAppDispatch();

    const handleOnClickAddQuestions = () => {
        dispatch(addQuestions()).unwrap().then(() => dispatch(updateTab(eTab.QUESTIONS)))
    }

    return (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <InterviewSource />
        <InterviewScoringOptions />
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Button
                style={{ display: 'flex', alignSelf: 'start' }}
                variant='contained'
                onClick={handleOnClickAddQuestions}
            >START</Button>
            <Tooltip title={<div style={{ whiteSpace: 'pre-line' }}>{`Click on START after adding all questions \n-- this action clears the feedback --`}</div>}>
                <InfoIcon color='action' />
            </Tooltip>
        </div>
    </div>
    )
}

export default InterviewSettings