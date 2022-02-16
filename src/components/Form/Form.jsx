import { useState } from 'react';
import s from './Form.module.css';

export default function Form({ setMovieSearch }) {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Enter correct movie name');
      return;
    }
    setMovieSearch(input);
    setInput('');
  };
  return (
    <form className={s['SearchForm']} onSubmit={handleSubmit}>
      <input
        className={s['SearchForm-input']}
        name="input"
        type="text"
        placeholder={s['Search by movie name']}
        value={input}
        onChange={handleChange}
      />
      <button type="submit" className={s['SearchForm-button']}>
        <span className={s['SearchForm-button-label']}>Search</span>
      </button>
    </form>
  );
}
