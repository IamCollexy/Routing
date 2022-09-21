import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {getAllComments} from '../../lib/api'
import { useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';
import { useCallback } from 'react';


const Comments = () => {

  const [isAddingComment, setIsAddingComment] = useState(false);

      const params = useParams();

      const {quotesId} = params;

const {sendRequest, status, data: loadedComments} = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.quotesId);
  }, [sendRequest, quotesId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const addedCommentHandler = useCallback(() => {
    sendRequest(quotesId);
  },[sendRequest, quotesId]);

let comments;

if (status === 'pending'){
    
  comments = (
    <div className='centered'>
      <LoadingSpinner/>
    </div>
  )
}

if (status === 'completed' && loadedComments && loadedComments.length > 0) {
  comments = <CommentsList comments={loadedComments} />;
}

if (
  status === 'completed' &&
  (!loadedComments || loadedComments.length === 0)
) {
  comments = <p className='centered'>No comments were added yet!</p>;
}

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button  onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}      
      {isAddingComment && 
      <NewCommentForm  
      quoteId={quotesId} 
      onAddedComments={addedCommentHandler}
      />}
   {comments}
    </section>
  );
};

export default Comments;
