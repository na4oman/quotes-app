import { useState } from 'react'
import { useParams } from 'react-router-dom'

import classes from './Comments.module.css'
import NewCommentForm from './NewCommentForm'
import { useGetCommentsQuery } from '../../services/http'
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentsList from './CommentsList'
import { transformedData } from '../../lib/api'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)
  const params = useParams()
  const { data, isSuccess, isFetching } = useGetCommentsQuery(params.quoteId)

  const loadedComments = transformedData(data)

  let comments

  if (isFetching) {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (isSuccess && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />
  }

  if (isSuccess && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments were added yet!</p>
  }

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} />}
      {comments}
    </section>
  )
}

export default Comments
