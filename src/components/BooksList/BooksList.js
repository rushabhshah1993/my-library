/* Package imports */
import React from 'react';

/* Style imports */
import styles from './BooksList.scss';

/* Component imports */
import BookCard from './../BookCard/BookCard';

const BooksList = props => {
    let element = props.books.map(book => {
        return (
            <BookCard book={book} />
        )
    });

    return (
        <div className={styles.bookList}>
            { element }
        </div>
    )
}

export default BooksList;