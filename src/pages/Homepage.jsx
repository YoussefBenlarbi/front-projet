/* eslint-disable react/prop-types */
// import styled from 'styled-components';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import styled from 'styled-components';
import ProductsCarousel from '../components/ProductsCarousel';
// import { SCREENS } from '../responsive';
// import blobImg from '../assets/blob.svg';
// import logoUIR from '../assets/logoUIR.jpg';
function Homepage(props) {

	return (
		<div className="flex-grow ">
			<div className=" w-full max-w-screen-2xl flex justify-between pl-3 pr-3 lg:pl-12 lg:pr-12">
				{/* left container */}
				<div className="w-full flex flex-col">
					<h1 className="font-bold text-2xl md:mt-5 mt-2 xl:text-6xl sm:text-3xl md:text-4xl lg:font-black md:font-extrabold  text-black  mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed">
						{/* <h1 className="mb-4 mr-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"> */}
						Portez fierement vos{' '}
						<span className="px-2 mt-2 text-white bg-yellow-500 rounded dark:bg-yellow-500">
							Couleurs
						</span>{' '}
						{/* </h1> */}
					</h1>
					<p className='text-xs lg:text-sm xl:text-lg sm:max-h-full  overflow-hidden max-h-12 text-gray-800'>
						Embark on an enriching academic experience with our collection of
						university-made products.
					</p>
					<button className="p-2 w-60 mt-6 bg-blue-400 text-white font-bold font-mono hover:bg-white hover:text-blue-500 border-2 border-blue-400 rounded-md">
						Check our products
					</button>
				</div>
				{/* right container */}
			</div>
			<div className="text-end mt-5">
				{/* <h1 className="mb-4 mr-2 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
					Portez fierement vos{' '}
					<span className="px-2 mt-2 text-white bg-yellow-500 rounded dark:bg-yellow-500">
						Couleurs
					</span>{' '}
				</h1> */}
				{/* <p className="text-lg font-normal mt-2 text-gray-500 lg:text-3xl mr-3 font-mono  dark:text-gray-400">
						Ajoutez touche de style à votre quotidien{' '}
					</p> */}
			</div>
			<ProductsCarousel productCart={props.productCart} setProductCart={props.setProductCart}/>
		</div>
	);
}
export default Homepage;
