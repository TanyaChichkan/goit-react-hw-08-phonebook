import axios from "axios";
import {
  addContact,
  setError,
  setLoading,
  deleteContact,
  getContacts,
  changeContact,
  resetSelected,
} from "../actions/contactsActions";


// axios.post(
//   `${process.env.REACT_APP_BASE_URL}/myOwnFolder/${localId}.json`,
//   {
//     data: "my info",
//   },
//   {
//     params: {
//       auth: token,
//     },
//   }

export const addContactOperations = (contact) => async (dispatch,getState) => {
  const token = getState().auth.idToken;
  const localId = getState().auth.localId;
  // const contactsLength = getState().contactsArr.contacts.length;
  // const refreshToken = getState().auth.refreshToken;
  
  dispatch(setLoading());

  try {
    const response = await axios.post(
      `https://phonebook-83997-default-rtdb.firebaseio.com/myOwnFolder/${localId}/.json`,
      {
        ...contact,
        update: false,
      },
      {
        params: {
          auth: token,
        },
      }
    );
    dispatch(addContact({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(dispatch(setError(error)));
  } finally {
    dispatch(setLoading());
  }
};

export const deleteContactOperations = (id, contact) => (dispatch,getState) => {
  const token = getState().auth.idToken;
  const localId = getState().auth.localId;
  // const contactsLength = getState().contactsArr.contacts.length;

  dispatch(setLoading());

  axios
    .delete(`https://phonebook-83997-default-rtdb.firebaseio.com/myOwnFolder/${localId}/${id}.json`, 
    // {
    //   data:contact
    // },
    {
      params: {
        auth: token,
      }
    })
    .then(() => {

      dispatch(deleteContact(id));

      // if(contactsLength<1) {
      //   dispatch(setEmptyListMessage())
      // }
  })
    .catch((error) => dispatch(setError(error)))
    .finally(() => dispatch(setLoading()));
};

export const getContactsOperations = () => (dispatch,getState) => {
  const token = getState().auth.idToken;
  const localId = getState().auth.localId;
  dispatch(setLoading());

  axios
    .get(`https://phonebook-83997-default-rtdb.firebaseio.com/myOwnFolder/${localId}.json`,
    {
      params: {
        auth: token,
      }
    })
    .then((response) => {
      if(response.data){
      const contacts = Object.keys(response.data).map((key) => ({
        ...response.data[key],
        id: key,
      }));
      console.log(response);
      dispatch(getContacts(contacts));
    } 
    // else {
    //   dispatch(setEmptyListMessage());
    // }
    })
    .catch((error) => {
      console.log(error);
      dispatch(setError(error))
    })
    .finally(() => dispatch(setLoading()));
};

export const changeContactsOperations = (newContact) => (dispatch,getState) => {
  const token = getState().auth.idToken;
  const localId = getState().auth.localId;
  dispatch(setLoading());

  axios
    .put(`https://phonebook-83997-default-rtdb.firebaseio.com/myOwnFolder/${localId}/${newContact.id}.json`, 
    {
      ...newContact,
      update: false,
    },
    {
      params: {
        auth: token,
      }
    })
    .then(() => {
      dispatch(changeContact(newContact));
      dispatch(resetSelected());
    })
    .catch((error) => setError(error))
    .finally(() => dispatch(setLoading()));
};
