import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Actions {
    id: number;
    title: string;
    description: string;
    image: string;
    promocode: string;
    percent: number;
}

interface ActionsState {
    actions: Actions[];
}
const initialState: ActionsState = {
    actions: [],
};

export const actionsSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        getActionsAll: (state, action: PayloadAction<Actions>) => {
            state.actions.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                image: action.payload.image,
                promocode: action.payload.promocode,
                percent: action.payload.percent,
            });
        },
        getAction: (state, action: PayloadAction<number>) => {
            state.actions.find((item) => item.id === action.payload);
        },
    },
});

export const { getAction, getActionsAll } = actionsSlice.actions;
export default actionsSlice.reducer;
