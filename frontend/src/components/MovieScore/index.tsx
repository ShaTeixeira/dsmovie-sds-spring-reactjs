import MovieStars from "components/MovieStars";
import "./styles.css";


type Props = {
  score: number;
  count: number;
};


function MovieScore({ score, count }: Props) {
  const text = {
    value: "avaliações", 
  };

  return (
    <div className="dsmovie-score-container">
      {/* condicional ternario */}
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "Aguardando avaliação"}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">
        {count} {text.value}
      </p>
    </div>
  );
}

export default MovieScore;