/* Package imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Style imports */
import styles from './Book.scss';

/* Component imports */
import NavigationBar from './../../components/NavigationBar/NavigationBar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

/* Utils imports */
import { withNavigation } from './../../hocs';


// const withNavigation = Component => {
//     return props => <Component 
//         {...props} 
//         navigate={useNavigate()} 
//         location={useLocation()}
//         params={useParams()} 
//     />
// }
export class Book extends Component {
    render() {
        let book = this.props.books.find(book => book.id === this.props.params.id);
        let element = <p>Loading...</p>
        if(book) {
            element = (
                <>
                    <div className={styles.imgContainer}>
                        <img src={book.cover} className={styles.cover} />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <p className={styles.key}>Title: </p>
                            <p className={styles.value}>{book.title}</p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.key}>Author: </p>
                            <p className={styles.value}>{book.author}</p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.key}>Blurb: </p>
                            <p className={styles.value}>{book.details}</p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.key}>ISBN: </p>
                            <p className={styles.value}>{book.isbn}</p>
                        </div>
                        <div className={styles.section}>
                            <p className={styles.key}>Year: </p>
                            <p className={styles.value}>{book.year}</p>
                        </div>
                    </div>
                </>
            );
        } else {
            element = (
                <p>
                    Unfortunately, we are facing some difficulties in fetching your requested book. Kindly try again after sometime.
                </p>
            )
        }

        return (
            <div>
                <NavigationBar />
                <div className={styles.bookContainer}>
                    { element }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books
    }
}

export default withNavigation(
    connect(mapStateToProps)(Book)
);