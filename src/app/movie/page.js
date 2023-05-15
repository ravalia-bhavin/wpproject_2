import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import Link from "next/link";
// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import styles from "@/app/styles/common.module.css"


const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve,2000))
    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET', headers: {
            'X-RapidAPI-Key': 'ae40ed4503msh091eccae82604bfp11c6eejsne7c35d6537ba',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    const main_data = data.titles;

    console.log(data);


    return (<>

        <section className={styles.movieSection}>
            <div className={styles.container}>
                <h1>
                    Series & Movie
                </h1>
                <div className={styles.card_section}>
                    {main_data.map((curElem) => {
                        return <MovieCard key={curElem.id} {...curElem}/>
                    })}</div>
            </div>
        </section>
    </>);
};

export default Movie;