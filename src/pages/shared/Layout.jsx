import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';
import pic from '../../assets/t-shirt.jpg';

function Layout() {
	
	const [productCart, setProductCart] = useState([
		{ name: 'Benlamlih', price: '499', description: 'T-shirt UIR',imagePath:pic },
		{ name: 'Benlamlih', price: '499', description: 'T-shirt UIR',imagePath:pic },
	]);
	return (
		<div className=" flex flex-col min-h-screen relative overflow-hidden ">
			<Navbar productCart={productCart} setProductCart={setProductCart} />
			{<Outlet productCart={productCart} setProductCart={setProductCart} />}
			<Footer />
		</div>
	);
}

export default Layout;
