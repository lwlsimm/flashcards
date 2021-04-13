import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { selectQuizzies } from './quizziesSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function Topic() {
  const quizzies = useSelector(selectQuizzies);  // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzies[quizId];
  const quizName = quizzies[quizId].name;

  return (
  
    <section>
      <h1>{quizName}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
