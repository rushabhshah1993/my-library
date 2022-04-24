/* Package imports */
import React from 'react';
import { useNavigate } from 'react-router-dom';

/* Style imports */
import styles from './BookCard.scss';

const BookCard = props => {
    let navigate = useNavigate();

    const bookClickHandler = id => {
        navigate(`/book/${id}`);
    }

    return (
        <div className={styles.bookCard} onClick={() => bookClickHandler(props.book.id)}>
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