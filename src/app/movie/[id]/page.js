import React from 'react';
import Image from "next/image";
import styles from "@/app/styles/common.module.css"

const Page = async ({params}) => {

    const id = params.id;

    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ae40ed4503msh091eccae82604bfp11c6eejsne7c35d6537ba',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    const main_data=data[0].details;



    return (
        <>
        <h1>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>

        </h1>
        </>
    );
};

export default Page;