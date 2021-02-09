
import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setError,
  resetError,
  setLoading,
  updateContact,
  filterContacts,
  resetSelected,
  addToSelected,
  changeContact,
  getContacts,
  setEmptyListMessage,
  resetEmptyListMessage
} from "../actions/contactsActions";

const initialArray = [];

const initialState = {
  contacts: initialArray,
  isLoading: false,
  error: "",
  selectedContact: null,
  // emptyListMessage:false
};

// ==============================================Redux Toolkit==============================================

export const contactsReducer = createReducer(
  { ...initialState },
  {
    [addContact]: (state, action) => {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },

    [setLoading]: (state) => {
      return { ...state, isLoading: !state.isLoading };
    },

    [setError]: (state, action) => {
      return { ...state, error: action.payload };
    },

    [resetError]: (state, action) => {
      return { ...state, error: "" };
    },

    [deleteContact]: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts.filter((contact) => contact.id !== action.payload)],
      };
    },

    [updateContact]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.map((contact) =>
            contact.id === action.payload ? { ...contact, update: !contact.update } : contact
          ),
        ],
      };
    },

    [resetSelected]: (state, action) => {
      return { ...state, selectedContact: null };
    },

    [addToSelected]: (state, action) => {
      if (state.contacts.find((contact) => contact.id === action.payload)) {
        return {
          ...state,
          selectedContact: { ...state.contacts.find((contact) => contact.id === action.payload) },
        };
      } else {
        return state;
      }
    },

    [changeContact]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.map((item) =>
            item.id === action.payload.id
              ? { ...item, name: action.payload.name, number: action.payload.number, update: false }
              : { ...item }
          ),
        ],
      };
    },

    [getContacts]: (state, action) => {
      return { ...state, contacts: [...action.payload] };
    },

    // [setEmptyListMessage]:(state,action)=>{
    //   return {...state,emptyListMessage:!state.emptyListMessage};
    // },

    // [resetEmptyListMessage]:(state,action)=>{
    //   return {...state,emptyListMessage:action.payload};
    // }
  }
);

export const filterReducer = createReducer("", {
  [filterContacts]: (state, action) => {
    return (state = action.payload);
  },
});

