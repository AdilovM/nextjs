import QuestionItem from './QuestionItem'
import questionsStyles from '../styles/Question.module.css'

const QuestionList = ({ questions }) => {
  return (
    <div className={questionsStyles.grid}>
      {questions.map((question) => (
        <QuestionItem question={question} />
      ))}
    </div>
  )
}

export default QuestionList
