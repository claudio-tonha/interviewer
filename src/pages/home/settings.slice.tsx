import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum eTab {
    SETTINGS = 0,
    QUESTIONS = 1
}

interface ISettingsState {
    questions: string;
    currentTab: eTab;
    scoringOptions: string
    scoreLabel?: string
}

const initialState: ISettingsState = {
    currentTab: eTab.SETTINGS,
    questions: "",
    scoringOptions: ""
}

const InterviewSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        updateQuestions(state, action: PayloadAction<string>) {
            if (action.payload) {
                state.questions = action.payload
            }
        },
        updateTab(state, action: PayloadAction<number>) {
            state.currentTab = action.payload;
        },
        updateScoringOptions(state, action: PayloadAction<string>) {
            state.scoringOptions = action.payload;
        },
        updateScoreLabel(state, action: PayloadAction<string>) {
            state.scoreLabel = action.payload;
        }
    }
});

export const { updateQuestions, updateTab, updateScoringOptions, updateScoreLabel } = InterviewSlice.actions

export default InterviewSlice.reducer;