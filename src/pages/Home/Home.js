/* Package imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Store imports */
import { fetchBooks } from './../../store/actions/booksActions';

export class Home extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        let element = <p>Loading...</p>;
        if(this.props.loadingComplete && !this.props.fetchFailed) {
            element = (
                <p>Book</p>
            )
        } else if(this.props.loadingComplete && this.props.fetchFailed) {
            element = (
                <p>Unfortunately, we are facing some technical issues. Kindly check again after sometime.</p>
            )
        }

        return (
            <div>
                Home
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