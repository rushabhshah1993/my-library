/* Package imports */
import cloneDeep from 'lodash/cloneDeep';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from '../../hocs';

/* Component imports */
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { addBook } from '../../store/actions/booksActions';

/* Style imports */
import styles from './CreateBook.scss';

export class CreateBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            year: '',
            isbn: '',
            details: '',
            cover: ''
        }
    }

    inputChangeHandler = (key, event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    btnClickHandler = () => {
        let perviousId = this.props.lastBook[0].id.split("B")[1];
        let newBookObj = {
            title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            isbn: this.state.isbn,
            cover: this.state.cover,
            details: this.state.details,
            id: `B${+perviousId+1}`
        }

        let updatedBooks = cloneDeep(this.props.books);
        updatedBooks.push(newBookObj);

        this.props.addBook(updatedBooks)
        .then(response => {
            if(response.success) {
                if(confirm('Your book has been successfully added to the database. We will now redirect you to the home page.')) {
                    this.props.navigate('/');
                }
            }
        });
    }

    render() {
        return (
            <div className={styles.createBookContainer}>
                <NavigationBar />

                <div className={styles.content}>
                    <p className={styles.pageTitle}>Add a new book</p>
                    <div className={styles.form}>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>Title:</p>
                            <input 
                                type={'text'} 
                                value={this.state.title} 
                                placeholder={'Enter the title of the book'}
                                onChange={(e) => this.inputChangeHandler('title', e)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>Author:</p>
                            <input 
                                type={'text'} 
                                value={this.state.author} 
                                placeholder={'Enter the name of the author of the book'}
                                onChange={(e) => this.inputChangeHandler('author', e)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>Year:</p>
                            <input 
                                type={'number'} 
                                value={this.state.year} 
                                placeholder={'Enter the year in which the book was written'}
                                onChange={(e) => this.inputChangeHandler('year', e)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>ISBN:</p>
                            <input 
                                type={'number'} 
                                value={this.state.isbn} 
                                placeholder={'Enter the ISBN number of the book'}
                                onChange={(e) => this.inputChangeHandler('isbn', e)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>Cover Image URL:</p>
                            <input 
                                type={'text'} 
                                value={this.state.cover} 
                                placeholder={'Enter the URL for the cover image of the book'}
                                onChange={(e) => this.inputChangeHandler('cover', e)} />
                        </div>
                        <div className={styles.inputContainer}>
                            <p className={styles.label}>Blurb:</p>
                            <textarea 
                                value={this.state.details} 
                                placeholder={'Enter a description/blurb of the book'}
                                onChange={(e) => this.inputChangeHandler('details', e)}></textarea>
                        </div>
                    </div>

                    <div className={styles.btn} onClick={this.btnClickHandler}>
                        Save Book
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books,
        lastBook: state.books.books.slice(-1)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: data => dispatch(addBook(data))
    }
}

export default withNavigation(
    connect(mapStateToProps, mapDispatchToProps)(CreateBook)
);