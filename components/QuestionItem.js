import Link from 'next/link'
import questionsStyles from '../styles/Question.module.css'

const QuestionItem = ({ question }) => {
  return (
    <Link href={`/article/${question.id}`}>
      <a className={questionsStyles.card}>
        <h3>{question.question} &rarr;</h3>
        <p>{question.excerpt}</p>
      </a>
    </Link>
  )
}

export default QuestionItem
