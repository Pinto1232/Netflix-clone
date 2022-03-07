import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import requests from '../request/Requests';
import Row from './Row';

const HomeScreen = () => {
    return (
        <div className="homeScreen">
            {/*Nav*/}
            <Nav/>
            {/*Banner*/}
            <Banner/>

            {/** All Rows */}
            <Row
              title="NETFLIX TRENDING NOW"
              fetchUrl={requests.fetchTrending}
            />
        

            <Row
                title="NETFLIX TOP RATED"
                fetchUrl={requests.fetchTopRated}
            />

             {/*Rows Originals */}
             <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
             />

             
             {/*Rows Actions*/}
             <Row
                title='NETFLIX ACTIONS'
                fetchUrl={requests.fetchActionMovies}
             />

             
             {/*Rows Comedy*/}
             <Row
                title='NETFLIX COMEDY'
                fetchUrl={requests.fetchComedyMovies}
             />

             
             {/*Rows Documentaries*/}
             <Row
                title='NETFLIX DOCUMENTARIES'
                fetchUrl={requests.fetchDocumentaries}
             />

             {/*Rows Romance*/}
             <Row
                title='NETFLIX ROMANCE'
                fetchUrl={requests.fetchRomanceMovies}
             />

            
             {/*Rows Horror*/}
             <Row
                title='NETFLIX Horror'
                fetchUrl={requests.fetchHorrorMovies}
             />

             


         

        </div>
    )
}

export default HomeScreen