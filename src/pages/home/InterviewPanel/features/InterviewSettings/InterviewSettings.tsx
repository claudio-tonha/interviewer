import InterviewInstructions from "./features/InterviewIntructions/InterviewInstructions"
import InterviewLevelOptions from "./features/InterviewLevelOptions/InterviewLevelOptions"
import InterviewSource from "./features/InterviewSource"

const InterviewSettings = () => {
    return (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <InterviewInstructions />
        <div>
            <InterviewLevelOptions />
            <InterviewSource />
        </div>
    </div>
    )
}

export default InterviewSettings