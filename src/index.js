/* Package imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Store import */
import store from './store/store';

/* Components imports */
import Home from './pages/Home/Home';
import CreateBook from './pages/CreateBook/CreateBook';
import Book from './pages/Book/Book';

/* Style imports */
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/create" element={<CreateBook />} />
                <Route path="/book/:id" element={<Book />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
