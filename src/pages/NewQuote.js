import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import { useAddQuoteMutation } from '../services/http'

const NewQuote = () => {
  const navigate = useNavigate()
  const [addQuote, { isSuccess, isLoading }] = useAddQuoteMutation()

  useEffect(() => {
    if (isSuccess) {
      navigate('/quotes')
    }
  }, [isSuccess, navigate])

  const addQuoteHandler = quoteData => {
    addQuote(quoteData)
  }

  return (
    <section>
      <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler} />
    </section>
  )
}

export default NewQuote
