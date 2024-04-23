import { useState, useEffect, useRef } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';
import MenuItem from '../MenuItem';
import Link from 'next/link';

export default function Navigation({ toggleMenu }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigationRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navigationRef.current &&
                !navigationRef.current.contains(event.target) &&
                isOpen
            ) {
                setIsOpen(false);
                toggleMenu();
            }
        };
        
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, toggleMenu]);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        toggleMenu(); // Call the function passed from the parent component
    };

    return (
        <div>
            <div className={styles.box} onClick={handleToggleMenu}></div>
            <div className={styles.sideNav} ref={navigationRef}>
                <div className={styles.appInfo}>
                    <Image src="/images/closet-space-app.png" alt="App Logo" width={100} height={100} />
                    <p className={styles.appName}>Clotho</p>
                </div>
                
                <div className={styles.userInfo}>
                    <Image src="/images/user.png" alt="User Image" width={50} height={50} />
                    <p className={styles.welcome}>Welcome!</p>
                </div>

                <div className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
                    <Link href="/">
                        <MenuItem title="Home" />
                    </Link>
                    <Link href="/Profile/Profile">
                        <MenuItem title="Profile" />
                    </Link>
                    <Link href="/Inventory/Inventory">
                        <MenuItem title="Inventory" />
                    </Link>
                    <Link href="/Calendar/Calendar">
                        <MenuItem title="Calendar" />
                    </Link>
                    <Link href="/Collection/Collection">
                        <MenuItem title="Collection" />
                    </Link>
                    <Link href="/ThriftStore/ThriftStore">
                        <MenuItem title="Thrift Stores" />
                    </Link>
                    <hr />
                    <MenuItem title="Posts" />
                    <MenuItem title="Favourite Fashion Trends" />
                    <MenuItem title="History" paddingBottom="30px" />
                    <hr />
                    <Link href="/Setting/Setting">
                        <MenuItem title="Setting" />
                    </Link>
                    <MenuItem title="Sign Out" />
                </div>
            </div>
        </div>
    );
}


