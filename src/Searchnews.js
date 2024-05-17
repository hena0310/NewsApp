
import React from 'react';
import axios from 'axios';
import './styles.css';

class Searchnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            mydata: []
        };
    }
  
    Search() {
        const { key } = this.state;
        axios.get(`https://newsapi.org/v2/everything?q=${key}&apiKey=e670557a57cd47c690e18a15e0c6a79b`)
            .then(res => {
                console.log(res.data);
                this.setState({ mydata: res.data.articles });
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
           
    }
   
    render() { 
        return (
            <div className="search-container">
                <input
                    type='text'
                    onChange={(e) => this.setState({ key: e.target.value })}
                    className="input-style"
                    placeholder="Enter keyword"
                />
                <input
                    type='button'
                    value='Search'
                    onClick={this.Search.bind(this)}
                    className="button-style"
                />
                <div className="card-container-style">
                    {this.state.mydata.map((article, index) => (
                        <div key={index} className="card-style">
                            <h2 style={{ color: 'green' }}>{article.title}</h2>
                            <p style={{ color: 'grey' }}>{article.description}</p>
                            <img src={article.urlToImage} alt={article.title} style={{ width: '100%' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Searchnews;
