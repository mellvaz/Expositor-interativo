import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!title || !cover) return;

    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <TextInput id="title" label="Título:" value={title} setValue={setTitle} />
      <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
      <button type="submit" className="add-button">
        Adicionar
      </button>
    </form>
  );
}

NewGameForm.propTypes = {
  addGame: PropTypes.func.isRequired
};