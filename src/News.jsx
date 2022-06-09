import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import NewsItems from './NewsItems';

import PropTypes from 'prop-types'
import Spinner from './Spinner';


export default class News extends Component {
    articles = []
    static defaultProp = {
        category: "general"
    }
    static propTypes = {
        category: PropTypes.string,
    }


    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loding: false,
            page: 1,
            totalResults: 100
        }
    };

    async componentDidMount() {

        this.setState({ loding: true });

        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f44a141b51cf4853b5313fee7ee27355&page=${this.state.page}&pageSize=20`;
        let data = await fetch(apiUrl);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loding: false,
        });
        console.log(this.articles);
    }

    prevHandler = async () => {
        this.setState({
            loding: true,
            articles: [],
        });
        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f44a141b51cf4853b5313fee7ee27355&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(apiUrl);
        let parsedData = await data.json();

        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loding: false

        });

    }
    nextHandler = async () => {
        this.setState({
            loding: true,
            articles: [],
        });

        let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f44a141b51cf4853b5313fee7ee27355&page=${this.state.page + 1}&pageSize=20`;

        let data = await fetch(apiUrl);
        let parsedData = await data.json();


        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loding: false
        });



    }




    render() {
        return (
            <>

                <div className="main row p-3" >
                    <h3 style={{ textAlign: "center", overflow: "hidden" }}>Top Headlines</h3>

                    <div className="d-flex justify-content-between my-4">
                        <button disabled={this.state.page <= 1} className="btn btn-primary btn-md" onClick={this.prevHandler}>&larr; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults / 20) <= this.state.page} className="btn btn-primary btn-md" onClick={this.nextHandler}>Next &rarr;</button>
                    </div>
                    {this.state.loding && <Spinner />}


                    {
                        this.state.articles.map((element) => {

                            return <div className="col-md-4" key={element.url}>
                                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} />
                            </div>
                        })
                    }
                    <div className="d-flex justify-content-between my-4">
                        <button disabled={this.state.page <= 1} className="btn btn-primary btn-md" onClick={this.prevHandler}>&larr; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults / 20) <= this.state.page} className="btn btn-primary btn-md" onClick={this.nextHandler}>Next &rarr;</button>
                    </div>

                </div>
            </>
        )
    };

}

