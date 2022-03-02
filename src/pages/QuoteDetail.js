import { useParams, Link, Routes, Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'
import { useGetQuoteQuery } from '../services/http'
import LoadingSpiner from '../components/UI/LoadingSpinner'

const QuoteDetail = () => {
  const params = useParams()
  const { data, error, isLoading, isSuccess } = useGetQuoteQuery(params.quoteId)

  if (isLoading) {
    return (
      <div className='centered'>
        <LoadingSpiner />
      </div>
    )
  }

  if (error) return <p className='centered focused'>{error.data}</p>

  if (!isSuccess) {
    return <p>No quote found.</p>
  }

  return (
    <section>
      <HighlightedQuote text={data.text} author={data.author} />
      <Routes>
        <Route
          path=''
          element={
            <div className='centered'>
              <Link className='btn--flat' to='comments'>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path='comments' element={<Comments />} />
      </Routes>
    </section>
  )
}

export default QuoteDetail
