import styles from './Navigation.module.css'
import Image from 'next/image'
import MenuItem from '../MenuItem'

export default function Navigation() {
    return(
        <div className={styles.SideNav}>
            <div>
            <Image src="/images/closet-space-app.png" alt="App Logo" width={100} height={100}/>
            <p>Clotho</p>
            </div>
            <div>
                <Image src="/images/user.png" alt="User Image" width={40} height={40}/>
                <p>Welcome!</p>
            </div>
            <MenuItem title="My Profile"/>
            <MenuItem title="Calendar"/>
            <MenuItem title="Posts"/>
            <MenuItem title="Thrift Stores"/>
            <MenuItem title="Favourite Fashion Trends"/>
            <MenuItem title="History"/>
            <MenuItem title="Setting" paddingTop= "30px"/>
            <MenuItem title="Help"/>
            <MenuItem title="Sign Out"/>
        </div>
    )
}