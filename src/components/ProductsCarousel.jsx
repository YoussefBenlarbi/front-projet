/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Http from '../CustomHooks/Http';
// import pic1 from '../assets/t-shirt.jpg';
import CardCarouel from './CardCarouel';
import { useEffect } from 'react';
// import SweeperComp from './SweeperComp';
function ProductsCarousel(props) {
	const [products, setProduct] = useState([]);
	const http = Http();

	const getProducts = async () => {
		try {
			const apiCars = await http.get('/products');
			setProduct(apiCars.data);
			console.log(apiCars.data);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);
	
	return (
		<div className="md:mx-auto  md:w-[80%] md:max-w-full  mt-8 mb-3 overflow-visible ">
			<div className="carousel flex justify-center carousel-end p-4 space-x-6 bg-white rounded-box  ">
				{products &&
					products.map((info) => (
						// <CardCarouel productCart={props.productCart} setProductCart={props.setProductCart} key={info.id}  pic={info.image_path} title={info.name} elem={info} />
						<CardCarouel products={products} setProducts={setProduct}  key={info.id}  pic={info.image_path} title={info.name} elem={info} />

					))}
			</div>
					{/* <SweeperComp/> */}
		</div>
	);
}

export default ProductsCarousel;
