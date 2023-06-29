import { Component } from 'react';
import Style from 'components/Searchbar/Searchbar.module.css';
import { IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchJmg: '',
    inputValue: '',
  };
  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const querySearch = e.target.elements.searchJmg.value.trim();

    this.props.onSubmit(querySearch);
  };
  render() {
    return (
      <header className={Style.searchbar}>
        <form className={Style.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={Style.button}>
            <IoMdSearch values={{ style: { size: '200px' } }} />
            <span className={Style.buttonLabel}>Search</span>
          </button>

          <input
            className={Style.input}
            type="text"
            name="searchJmg"
            value={this.state.inputValue}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
