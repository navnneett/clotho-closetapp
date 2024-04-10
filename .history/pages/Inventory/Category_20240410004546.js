import styles from "@/styles/Category.module.css";
import Link from "next/link";
import BottomNavigation from "@/components/BottomNavigation/index.js";
import InventoryCard from "@/components/InventoryCard";
import { useState } from "react";
import Image from "next/image";
import ButtonTwo from "@/components/ButtonTwo";
import Button from "@/components/Button";

export default function Category() {
    return (
        <div className={styles.mainContainer} >
            <div className={styles.contentContainer}>
                <div className={styles.topHead}>
                    <div className={styles.headline}>
                        <h1 className={styles.title}>My Wardrobe</h1>
                        <h3 className={styles.content}>Customize Your Own Wardrobe</h3>
                    </div>
                    <div className={styles.user}>
                        <Image src="/images/inventory/User_account.png" height={35} width={30} />
                    </div>
                </div>

                <div className={styles.chip}>
                    <Button className={styles.buttons} title="All" height={40} width={100} borderRadius="10px" fontSize="var(--open-sans-small)">All</Button>
                    <ButtonTwo className={styles.buttons} title="Shoes" height={40} width={100}>Shoes</ButtonTwo>
                    <ButtonTwo className={styles.buttons} title="Tops">Tops</ButtonTwo>
                    <ButtonTwo className={styles.buttons} title="Bottoms">Bottoms</ButtonTwo>
                    <ButtonTwo className={styles.buttons} title="Jackets">Jackets</ButtonTwo>
                    <ButtonTwo className={styles.buttons} title="Accessories">Accessories</ButtonTwo>
                </div>

                <div className={styles.cards}>
                    
                </div>
            </div>
            
            <div>
                <BottomNavigation
                    bgColorInventory="var(--button-highlight-light)"
                    pathColorInventory="var(--white)"
                    borderStyle="60%"
                    IconWidth={90}
                    iconHeight={36}
                />
            </div>
        </div>
    );
}