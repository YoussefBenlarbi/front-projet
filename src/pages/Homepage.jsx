// import styled from 'styled-components';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
import ProductsCarousel from '../components/ProductsCarousel';

function Homepage() {
	return (
		<div className="flex-grow ">
			<div className="text-end mt-5">
				<h1 className="mb-4 mr-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
					Portez fierement vos{' '}
					<span className="px-2 mt-2 text-white bg-yellow-500 rounded dark:bg-yellow-500">
						Couleurs
					</span>{' '}
				</h1>
				{/* <p className="text-lg font-normal mt-2 text-gray-500 lg:text-3xl mr-3 font-mono  dark:text-gray-400">
						Ajoutez touche de style à votre quotidien{' '}
					</p> */}
			</div>
			<ProductsCarousel />
		</div>
	);
}
export default Homepage;
