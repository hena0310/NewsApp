import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Allnews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] };
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e670557a57cd47c690e18a15e0c6a79b')
            .then(res => {
                console.log(res.data);
                this.setState({ mydata: res.data.articles });
            });
    }
    render() {
        return (
            <>
                <h2 style={{ textAlign: 'center', margin: '20px 0' }}>All News</h2>
                <div className='container'>
                    <div className='row'>
                        {this.state.mydata.map((v, i) => (
                            <div className='col-md-4' key={i}>
                                <div className="card" style={{ marginBottom: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                                    <img className="card-img-top" src={v.urlToImage} alt="News" style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{v.source.name}</h5>
                                        <h5 className="card-title">{v.title}</h5>
                                        <p className="card-text">{v.description}</p>
                                        <a href={v.url} target="_blank" rel="noopener noreferrer" className="btn btn-success" >Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Allnews;
