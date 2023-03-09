import InterviewInstructions from "./features/InterviewIntructions/InterviewInstructions"
import InterviewSource from "./features/InterviewSource"

const InterviewSettings = () => {
    return (<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <InterviewInstructions />
        <div>
            <InterviewSource />
        </div>
    </div>
    )
}

export default InterviewSettings