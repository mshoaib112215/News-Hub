import React, { Component } from 'react'
import deafultImg from "./default.png"


export class NewsItems extends Component {
    render() {

        let { title, description, imageUrl, url } = this.props;

        return (
            <>
                <div className="cards card my-3 p-3 hideScroll ">
                    <h3 className='hideScroll' style={{ height: '100px' }}>{title}...</h3>
                    <img className="card-img-bottom" style={{ height: "180px", marginTop: '6px', marginBottom: "7px" }} src={!imageUrl ? deafultImg : imageUrl} alt="" />
                    <p className='hideScroll' style={{ height: '140px' }}>{description}</p>
                    <a className="btn btn-primary btn-sm" rel="noreferrer" href={url} target="_blank">Read More...</a>
                    <p>{ }</p>
                </div>
            </>
        )
    }
}

export default NewsItems    
