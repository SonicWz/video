import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Analysis } from "../types/analysis";
import { AnalyzesSchema } from "../types/AnalysisSchema";

const initialState: AnalyzesSchema = {};

export const AnalysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    setAnalysisToStore: (state, action: PayloadAction<Analysis>) => {
      state.currentAnalysis = action.payload;
    },
  },
});

export const { actions: AnalysisActions } = AnalysisSlice;
export const { reducer: AnalysisReducer } = AnalysisSlice;
