/* Package imports */
import React from 'react';

/* Style imports */
import styles from './BookCard.scss';

const BookCard = props => {
    return (
        <div className={styles.bookCard}>
            <div className={styles.imgContainer}>
                <img src={props.book.cover} className={styles.cover} />
            </div>
            <div className={styles.content}>
                <p className={styles.title}>{props.book.title}</p>
                <p className={styles.author}>{props.book.author}</p>

                <p className={styles.info}>{props.book.details}</p>
            </div>
        </div>
    )
}

export default BookCard;