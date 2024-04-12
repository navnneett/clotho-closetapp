import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import styles from '@/styles/Community.module.css'
import { useState } from "react";
import axios from 'axios';

export default function Community() {

    const [ data, setData ] = useState();
    const [ isButtonClicked, setIsButtonClicked ] = useState(false);

    var apiKey = '9596f078c7a0457fb5fe18c0190bfa42';
    var type = 'clothing';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = `https://newsapi.org/v2/everything?q=${type}&from=${date}&sortBy=${sortBy}&apiKey=${apiKey}`;

    const GrabUsers = () => {
        if(isButtonClicked) {
            setData(null);
            setIsButtonClicked(false)
        } else {
            axios.get(url)
            .then((response) => {
                console.clear();
                setData(response.data);
                setIsButtonClicked(true);
                console.log(response.data);
            }).catch(err => {
                console.log(err)
            })
        }
    }

    return (
        <>
            <div>
            <h1 className={styles.title}>Community</h1>
            <Button onClick={() => GrabUsers()} title={isButtonClicked ? "Close News": "See News"} height={40} width={170}></Button>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
                border: isButtonClicked ? 'var(--inventory-card-outline)' : 'none',
                margin: '20px',
                padding: '30px',
                fontFamily: '--open-sans-small',

            }}>
            {
                data && Array.isArray(data.articles) && data.articles.slice(8, 9).map((d, index) => {
                    return(
                        <div key={index}>
                            <h3 style={{ fontFamily: 'var(--roboto-slab-text)', color: 'var(--button-highlight-light)', fontSize: 'var(--open-sans-medium)', fontWeight: 'bold' }}>{d.title}</h3>
                            <p style={{ fontSize: 'var(--open-sans-small)', fontWeight: 'var(--open-sans-weight)' }}>
                                {d.description}
                                {d.author}
                            </p>
                            {/* <Image /> */}
                        </div>
                    )
                })
            }
            </div>

            <BottomNavigation
                bgColorCommunity="var(--button-highlight-light)"
                pathColorCommunity="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
            </div>
        </>
    )
}