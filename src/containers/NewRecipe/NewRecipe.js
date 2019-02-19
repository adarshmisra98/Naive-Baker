import React, { Component } from 'react';

import classes from './NewRecipe.css';

class NewRecipe extends Component {
    state = {
        title: '',
        content: '',
    }

    //             <label>Author</label>
    //             <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
    //                 <option value="Max">Max</option>
    //                 <option value="Manu">Manu</option>
    //             </select>
    render () {
        return (
            <div className={classes.NewPost}>
                <h1>Add a Recipe</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Recipe</button>
            </div>
        );
    }
}

export default NewRecipe;