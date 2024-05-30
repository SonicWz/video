import { StateSchema } from 'src/app/providers/StoreProvider';

export const getCurrentAnalysis = (state: StateSchema) => state.analyzes.currentAnalysis;
