import { useRef } from 'react'
import { useAddCommentMutation } from '../../services/http'
import LoadingSpinner from '../UI/LoadingSpinner'

import classes from './NewCommentForm.module.css'

const NewCommentForm = props => {
  const commentTextRef = useRef()
  const [addComment, { isLoading }] = useAddCommentMutation()

  const submitFormHandler = event => {
    event.preventDefault()

    const enteredText = commentTextRef.current.value

    // Optional: Could validate here
    if (enteredText.trim().length === 0) {
      return alert('Please enter a valid comment (not empty field).')
    }

    // Send comment to server
    addComment({ commentData: { text: enteredText }, quoteId: props.quoteId })
  }

  return (
    <>
      {isLoading && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor='comment'>Your Comment</label>
            <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn'>Add Comment</button>
          </div>
        </form>
      )}
    </>
  )
}

export default NewCommentForm
