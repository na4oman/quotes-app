import { useParams, Link, Routes, Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const DUMMY_DATA = [
  { id: 'q1', author: 'Nasko', text: 'Learning React is great!' },
  { id: 'q2', author: 'Atanas', text: 'Watching TV is loosing time.' },
  { id: 'q3', author: 'Petya', text: 'Reading books is fantastic!' },
]

const QuoteDetail = () => {
  const params = useParams()

  const quote = DUMMY_DATA.find(el => el.id === params.quoteId)

  if (!quote) {
    return <p>No quote found.</p>
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
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
