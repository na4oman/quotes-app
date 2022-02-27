import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
  { id: 'q1', author: 'Nasko', text: 'Learning React is great!' },
  { id: 'q2', author: 'Atanas', text: 'Watching TV is loosing time.' },
  { id: 'q3', author: 'Petya', text: 'Reading books is fantastic!' },
]

const AllQuotes = () => {
  return (
    <section>
      <QuoteList quotes={DUMMY_DATA} />
    </section>
  )
}

export default AllQuotes
