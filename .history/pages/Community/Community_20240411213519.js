import Button from "@/components/Button";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import { useState } from "react"

export default function Community() {

    const [ data, setData ] = useState();

    var apiKey = '9596f078c7a0457fb5fe18c0190bfa42';
    var type = 'Fashion';
    var date = '2024-04-11';
    var sortBy = 'publishedAt';

    const url = 

    return (
        <>
            <BottomNavigation
                bgColorCommunity="var(--button-highlight-light)"
                pathColorCommunity="var(--white)"
                borderStyle="60%"
                IconWidth={90}
                iconHeight={36}
            />
        </>
    )
}