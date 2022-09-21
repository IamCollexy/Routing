import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import  QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuotes = () => {
    
    const {sendRequest, status} = useHttp(addQuote);
        const navigate = useNavigate();
// const navigate = useNavigate();
  // navigate('/welcome', {replace: true}, -1, -2, 1);
    useEffect(() => {
        if (status === 'completed') {
            navigate('/quotes');
        }
    },[status, navigate]);

const addQuoteHandler = (quoteData ) => {
sendRequest(quoteData);


navigate('/quotes');


}
    return (
    <QuoteForm isLoading = {status === 'pending'} onAddQuote={addQuoteHandler}/>
)
};

export default NewQuotes;
