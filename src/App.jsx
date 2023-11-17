import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './pages/shared/Layout';
import ContactUs from './pages/ContactUs';
// Import other components if needed
// import Cars from './pages/Cars';
// import BookCar from './pages/BookCar';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="contacts" element={<ContactUs />} />
					{/* Uncomment if you have corresponding components */}
					{/* <Route path="cars" element={<Cars />} />
          <Route path="book-car" element={<BookCar />} /> */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
