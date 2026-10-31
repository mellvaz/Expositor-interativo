import PropTypes from "prop-types";
import Card from "./Card/index.jsx";

export default function Game({ id, title, releaseYear, description, coverImage, onRemove }) {
  return (
    <Card
      id={id}
      title={title}
      releaseYear={releaseYear}
      description={description}
      coverImage={coverImage}
      onRemove={onRemove}
    />
  );
}

Game.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.number,
  description: PropTypes.string,
  coverImage: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};