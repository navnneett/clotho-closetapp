import Button from "@/components/Button";
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react';
import BottomNavigation from "@/components/BottomNavigation/index.js";
import * as ImagePicker from 'expo-image-picker';
import styles from '@/styles/Profile.module.css'

export default function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("User Name");
    const [height, setHeight] = useState("XXX cm");
    const [weight, setWeight] = useState("XXX kg");
    const [gender, setGender] = useState("XXX");
    const [bodyShape, setBodyShape] = useState("XXXX");
    const [email, setEmail] = useState("Clotho.2024@email.com");
    const [avatar, setAvatar] = useState('/images/user-light.png');


    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };
    const handleBodyShapeChange = (e) => {
        setBodyShape(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleAvatarChange = (e) => {
        const file = e.target.files[0]; // Get the first file from the selected files
        if (file) {
            const reader = new FileReader(); // Create a file reader
            reader.onloadend = () => {
                setAvatar(reader.result); // Set the avatar to the uploaded image
            };
            reader.readAsDataURL(file); // Read the uploaded file as a data URL
        }
    };

    return (
        <>
            <main className={styles.main}>
                <div className={styles.pageTitle}>
                    <Image 
                        src={'/images/menu-burger.png'}
                        alt="Hamburger menu"
                        width={50}
                        height={35}
                        className={styles.menuIcon}
                    />
                    <h1 className={styles.title}>Profile</h1>
                </div>

                <div className={styles.topTnfo}>
                    <input
                        type="file"
                        accept="image/*" // Specify that only image files are accepted
                        onChange={handleAvatarChange}
                        className={styles.avatarInput}
                    />
                    <img 
                        src={avatar}
                        alt="User's avatar"
                        className={styles.avatar}
                    />
                    {isEditing ? (
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className={styles.nameInput}
                        />
                    ) : (
                        <p className={styles.name}>{name}</p>
                    )}
                </div>
                
                <div className={styles.info}>
                    <div className={styles.tags}>
                        <p className="text">Height</p>
                        <p className="text">Weight</p>
                        <p className="text">Gender</p>
                        <p className="text">Body Shape</p>
                        <p className="text">Email</p>
                    </div>
                    <div className={styles.tagsInfo}>
                        {isEditing ? (
                            <>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={handleHeightChange}
                                    className={styles.infoInput}
                                    min={0}
                                />
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={handleWeightChange}
                                    className={styles.infoInput}
                                    min={0}
                                />
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    list="genderOptions"
                                    className={styles.infoInput}
                                />
                                <input
                                    type="text"
                                    value={bodyShape}
                                    onChange={handleBodyShapeChange}
                                    className={styles.infoInput}
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className={styles.infoInput}
                                />
                            </>
                        ) : (
                            <>
                                <p className="text">{height} cm</p>
                                <p className="text">{weight} kg</p>
                                <p className="text">{gender}</p>
                                <p className="text">{bodyShape}</p>
                                <p className="text">{email}</p>
                            </>
                        )}
                    </div>
                </div>

                <div className={styles.button}>
                    <Button 
                        title={isEditing ? "Save Profile" : "Edit Profile"}
                        onClick={handleEditProfile}
                    />
                </div>
            </main>
            <BottomNavigation />
        </>
    )
}

