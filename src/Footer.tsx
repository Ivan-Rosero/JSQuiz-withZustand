import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const useQuestionData = () => {
  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;
    console.log(question);
    console.log(userSelectedAnswer);
    console.log(correctAnswer);
    if (userSelectedAnswer == null) unanswered++;
    else if (userSelectedAnswer === correctAnswer) correct++;
    else incorrect++;
  });

  return { correct, incorrect, unanswered }
};

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData();

  const reset = useQuestionsStore(state => state.reset)
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} - ❌ ${incorrect} - ❓ ${unanswered}`}</strong>
      <div>
      <Button onClick={() => reset()}>
        Resetear Juego
      </Button>
      </div>
    </footer>
  );
};
