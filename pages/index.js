import { server } from '../config'
import QuestionList from '../components/QuestionList'

export default function Home({ questions }) {
  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/questions`,
    {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': '*',
      },
    }
  )
  const questions = await res.json()

  return {
    props: {
      questions,
    },
  }
}
