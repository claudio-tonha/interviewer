import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface IInterviewResult {
    id: number;
    score?: string;
    question: string;
}

interface IInterviewState {
    questions: IInterviewResult[];
    feedback: string;
}

const initialState: IInterviewState = {
    questions: [],
    feedback: ''
}

export const addQuestions = createAsyncThunk(
    "interview/addQuestions",
    async (_, { getState, }) => {
        const state = getState() as RootState;
        return state.settings.questions.split("\n");
    }
)

const InterviewSlice = createSlice({
    name: "interview",
    initialState,
    reducers: {
        updateScore(state, action: PayloadAction<{ id: number, score: string }>) {
            const question = state.questions.find(x => x.id === action.payload.id);
            if (question) {
                question.score = action.payload.score
            }
        },
        updateFeedback(state, action: PayloadAction<string>) {
            state.feedback = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuestions.fulfilled, (state, action) => {
            state.questions = action.payload.map((question, index) => ({ question, id: index + 1 }));
        })
    },
});

export const { updateScore, updateFeedback } = InterviewSlice.actions

export default InterviewSlice.reducer;