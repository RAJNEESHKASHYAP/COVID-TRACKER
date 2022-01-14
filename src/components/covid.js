import React, { useEffect, useState } from 'react'
import './card.css';
const Covid = () => {
    const [data, setdata] = useState([])
    const getCovidData = async () => {
        try {
            const result = await fetch(`https://data.covid19india.org/data.json`)
            const jsonResult = await result.json();

            console.log(jsonResult.statewise[0])
            setdata(jsonResult.statewise[0])

        } catch (error) {
            console.log(error.message)
        }

    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <div className="main-container">
                <div className="heading">
                    <h1 className="heading__title">Live Preview</h1>
                    <p className="heading__credits">Covid 19 report</p>
                </div>
                <div className="cards">
                    <div className="card card-1">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Our Country</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                INDIA
                            </h1>
                        
                    </div>
                    <div className="card card-2">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Total Active.</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                {data.active}
                            </h1>
                        
                    </div>
                    <div className="card card-3">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Total Confirmed.</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                {data.confirmed}
                            </h1>
                        
                    </div>
                    <div className="card card-4">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Total Deaths.</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                {data.deaths}
                            </h1>
                        
                    </div>
                    <div className="card card-5">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Total Recovered.</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                {data.recovered}
                            </h1>
                        
                    </div>
                    <div className="card card-1">
                        <div className="card__icon"><i className="fas fa-bolt"></i></div>
                        <p className="card__exit"><i className="fas fa-times"></i></p>
                        <h2 className="card__title">Last Updated.</h2>
                        
                            {/* <a className="card__link" href="#">Apply Now <i className="fas fa-arrow-right"></i></a> */}
                            <h1 className="card__apply card__title fas fa-arrow-right" >
                                {data.lastupdatedtime}
                            </h1>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid
