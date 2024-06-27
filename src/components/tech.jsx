

import React, { useEffect, useState } from 'react'

export default function Technology() {
    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6ed3f24f506f410c896c667f925a8ff1");
        let data = await response.json();
        setMyNews(data.articles);
    }
    useEffect(() =>{
        fetchData();
    },[])
  return (
    <div style={{marginLeft:'300px'}}>
         <h1>Search : Technology News</h1>
       
        {
            mynews.map((element) =>{
                return(
                    <div className="card w-75" >
                    <img src={element.urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{element.author}</h5>
                    <p className="card-text">{element.title}</p>
                    <a href= {element.url}  target='_blank' class='btn btn-info'>Read More</a>
                    </div>
                    </div>

                )
            })
        }
        
    </div>
  )
}

