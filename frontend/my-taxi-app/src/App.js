import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerLogin from './components/Customer/CustomerLogin';
import CustomerSignup from './components/Customer/CustomerSignup';
import ViewCabs from './components/Customer/ViewCabs';
import BookCab from './components/Customer/BookCab';
import AdminLogin from './components/Admin/AdminLogin';
import DriverLogin from './components/Driver/DriverLogin';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/customer/signup" element={<CustomerSignup />} />
                    <Route path="/customer/login" element={<CustomerLogin />} />
                    <Route path="/customer/view-cabs" element={<ViewCabs />} />
                    <Route path="/customer/book-cab" element={<BookCab />} />
                    <Route path="/driver/login" element={<DriverLogin />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
