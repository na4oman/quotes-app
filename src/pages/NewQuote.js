import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
  const navigate = useNavigate()

  const addQuoteHandler = quoteData => {
    console.log(quoteData)

    navigate('/quotes')
  }

  return (
    <section>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </section>
  )
}

export default NewQuote
