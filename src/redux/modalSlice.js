import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: '',
  contactId: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    contactId: (state, action) => {
      state.contactId = action.payload;
    },
  },
});

export const { isOpen, contactId } = modalSlice.actions;
// export const ModalReducer = modalSlice.reducer;