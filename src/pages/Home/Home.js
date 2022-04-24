/* Package imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Store imports */
import { fetchBooks } from './../../store/actions/booksActions';

/* Component imports */
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import BooksList from '../../components/BooksList/BooksList';

export class Home extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        let element = <p>Loading...</p>;
        if(this.props.loadingComplete && !this.props.fetchFailed) {
            element = (
                <BooksList books={this.props.books} />
            )
        } else if(this.props.loadingComplete && this.props.fetchFailed) {
            element = (
                <p>Unfortunately, we are facing some technical issues. Kindly check again after sometime.</p>
            )
        }

        return (
            <div>
                <NavigationBar />
                { element }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        books: state.books.books,
        booksLoading: state.books.booksLoading,
        loadingComplete: state.books.booksLoadingComplete,
        fetchFailed: state.books.booksLoadingFailed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBooks: () => dispatch(fetchBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);