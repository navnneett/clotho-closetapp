import Image from "next/image";
import styles from "@/components/InventoryCard/InventoryCard.module.css"

export default function InventoryCard({
    title = "title",
    bgColor,
    imageURL,
    alt,
    color,
    borderRadius,
    border,
    boxShadow,
    height,
    width,
    cardHeight,
    cardWidth
}) {
    return (
        <>
            <fieldset className={styles.fieldset} cardHeight={cardHeight} cardWidth={cardHeight} style={{color: color, backgroundColor: bgColor, boxShadow: boxShadow,  borderRadius:  borderRadius, border: border}}>
                <div className={styles.cards}>
                    <Image src={imageURL} alt={alt} height={height} width={width} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
        </>
    )

}