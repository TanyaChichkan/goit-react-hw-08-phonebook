import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

import { resetError } from "../redux/actions/contactsActions";
import { getError, getContactsLoading,getEmptyListMessage } from "../redux/selectors/contactsSelectors";

import Section from "../components/section/Section";
import Form from '../components/form/Form';
import List from "../components/list/List";
import Filter from "../components/filter/Filter";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Spinner from "../components/spinner/Spinner";

import {getContacts} from '../redux/selectors/contactsSelectors';


const ContactsPage = () => {
    const error = useSelector(getError);
    const contactsArr = useSelector(getContacts);
    const loading = useSelector(getContactsLoading);
    // const emptyListMessage = useSelector(getEmptyListMessage);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(resetError());
    };
    
    return(
        <>
            <Section>
                <Form />
                    {error ? (
                    <ErrorMessage error={error} onclick={handleClick} />
                    ) : (
                    <>  
                        {contactsArr.length>1 && <Filter/>}
                        
                        <h2 style={{textAlign:"center"}}>Contact List</h2>
                        {loading && <Spinner />} 

                        {(contactsArr.length) ? <List /> : 
                   
                        (
                            <div style={{textAlign:"center"}}>
                                <h3>No contacts in your list yet</h3>
                            </div>
                        )}

                        {/* {! && (
                            <div style={{textAlign:"center"}}>
                                <h3>No contacts in your list yet</h3>
                            </div>
                        )} */}
                    </>
                )}
            </Section>
        </>
    )
};

export default ContactsPage;
