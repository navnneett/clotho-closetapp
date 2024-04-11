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
    content,
    photoId
}) {

    const card = inventory.photos.find(photo => photo.id === photoId);

    return (
        <>
            <fieldset className={styles.fieldset} style={{ color: color, backgroundColor: bgColor, boxShadow: boxShadow, borderRadius:  borderRadius, border: border}}>
                <div className={styles.cards}>
                    <Image src={card.} alt={alt} height={height} width={width} className={styles.image}/>
                    <p className={styles.content}>{title}</p>
                </div>   
            </fieldset>
            <div>
                <p className={styles.name}>{content}</p>
            </div>
        </>
    )

}