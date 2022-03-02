import QuoteList from '../components/quotes/QuoteList'
import { useGetQuotesQuery } from '../services/http'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import NoQuotesFound from '../components/quotes//NoQuotesFound'
import { transformedData } from '../lib/api'

const AllQuotes = () => {
  const { data, error, isLoading, isSuccess } = useGetQuotesQuery()

  const loadedQuotes = transformedData(data)

  if (isLoading) {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }

  if (error) return <p className='centered focused'>{error.data}</p>

  if (isSuccess && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <section>
      <QuoteList quotes={loadedQuotes} />
    </section>
  )
}

export default AllQuotes
