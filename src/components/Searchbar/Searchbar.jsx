import { Component } from 'react';
import { toast } from "react-hot-toast";
import { FcSearch } from "react-icons/fc";
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
    if (!this.state.search) {
      return toast.error('Enter text for search.');
    }
  };

  render() {
    return (
      <section className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <FcSearch size="25px" />
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            query={this.state.query}
          />
        </form>
      </section>
    );
  }
}