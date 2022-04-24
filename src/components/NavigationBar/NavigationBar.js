/* Package imports */
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Style imports */
import styles from './NavigationBar.scss';

const NavigationBar = props => {
    return (
        <div className={styles.navBar}>
            <p>My Library</p>
            <div className={styles.navigation}>
                <NavLink to={'/'} className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
                <NavLink to={'/books/create'} className={({isActive}) => isActive ? styles.active : ''}>Add a new book</NavLink>
            </div>
        </div>
    )
}

export default NavigationBar;