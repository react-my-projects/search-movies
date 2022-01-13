import React, { Component } from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.func(this.state.search, this.state.type);
        }
    }
    handleFilter = (event) => {
        this.setState(() => ({ type: event.target.dataset.type }), () => {
            this.props.func(this.state.search, this.state.type)
        })
    }
    componentDidUpdate(){
        console.log('update search component')
    }
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        id="email_inline"
                        type="search"
                        className="validate"
                        placeholder="search"
                        value={this.state.search}
                        onChange={(event) => this.setState(({ search: event.target.value}))}
                        onKeyDown={this.handleKey}
                    />
                    <div>
                        <label>
                            <input className="with-gap"
                                name="type"
                                type="radio"
                                data-type="all"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'} />
                            <span>All</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                name="type"
                                type="radio"
                                data-type="movie"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'} />
                            <span>Movies only</span>
                        </label>
                        <label>
                            <input className="with-gap"
                                name="type"
                                type="radio"
                                data-type="series"
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'} />
                            <span>Series only</span>
                        </label>
                    </div>
                    <button className="btn" onClick={() => this.props.func(this.state.search, this.state.type)}>Search Movie</button>
                </div>
            </div>
        )
    }
}

export { Search }