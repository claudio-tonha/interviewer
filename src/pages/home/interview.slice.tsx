import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum eAnswerType {
    YES = 'Yes',
    PARTIALLY = 'Partially',
    NO = 'No',
    ONLY_GIVING_EXAMPLES = 'Only giving Examples'
}

export enum eTab {
    SETTINGS = 0,
    QUESTIONS = 1
}

export interface IInterviewResult {
    id: number;
    status?: eAnswerType;
    question: string;
    feedback?: string;
}

interface IInterviewState {
    questions: IInterviewResult[];
    levelEnabled: boolean;
    currentTab: eTab;
}

const initialState: IInterviewState = {
    questions: [],
    levelEnabled: false,
    currentTab: eTab.SETTINGS
}

const InterviewSlice = createSlice({
    name: "interview",
    initialState,
    reducers: {
        addQuestions(state, action: PayloadAction<string>) {
            if (action.payload) {
                state.questions = action.payload.trim().split("\n").map((question, index) => ({ question, id: index + 1, feedback: '' }));
                state.currentTab = eTab.QUESTIONS;
            }
        },
        changeFeedback(state, action: PayloadAction<{ id: number, feedback: string }>) {
            const question = state.questions.find(x => x.id === action.payload.id);
            if (question) {
                question.feedback = action.payload.feedback
            }
        },
        changeLevel(state, action: PayloadAction<{ id: number, status: eAnswerType }>) {
            const question = state.questions.find(x => x.id === action.payload.id);
            if (question) {
                question.status = action.payload.status
            }
        },
        changeTab(state, action: PayloadAction<number>) {
            state.currentTab = action.payload;
        },
        toggleLevelEnabled(state) {
            state.levelEnabled = !state.levelEnabled;
        }
    },
});

export const { addQuestions, changeFeedback, changeLevel, changeTab, toggleLevelEnabled } = InterviewSlice.actions

export default InterviewSlice.reducer;