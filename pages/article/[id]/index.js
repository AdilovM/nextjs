import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'

const question = ({ question }) => {
  return (
    <>
      <Meta title={question.question} description={question.excerpt} />
      <h1>{question.question}</h1>
      <p>{question.answer}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/questions/${context.params.id}`)

  const question = await res.json()

  return {
    props: {
      question,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/questions`)

  const questions = await res.json()

  const ids = questions.map((question) => question.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default question
