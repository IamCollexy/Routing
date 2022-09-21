
import { Fragment, useEffect } from 'react';
import { Link,  Outlet,  Route,  Routes,  useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';


const QuoteDetail = () => {

const params = useParams();

const {quotesId} = params;

const {sendRequest, status, data: loadedQuote, error} =
  
useHttp(getSingleQuote, true );

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  if(status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    );
  };

  if(error) {
    return <p className='centered'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>no quote found!</p>;
  }

  return (
    <Fragment>
     
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />


    <div className='centered'>
    <Link 
    className='btn--flat' 
    to={'comments'}
   >
      Load Comments
      </Link>
    </div> 
<Outlet/>
    </Fragment>
  )
}

export default QuoteDetail;