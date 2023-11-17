/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import axios from 'axios';
import pic from '../assets/t-shirt.jpg';

function CardCarouel({ title, elem }) {

	const addToCart = async () => {
		try {
			// Replace the URL with your actual API endpoint
			const response = await axios.post(
				`http://localhost:8080/api/carts/2/addProduct/${elem.id}`,
				null, // pass null as the second parameter (data)
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			// Assuming the API response contains updated cart data
			const updatedCart = response.data;
				console.log(updatedCart)
			// Update the local state with the updated cart data
			// setProductCart(updatedCart);

			console.log('Product added to cart successfully:', response.data);
		} catch (error) {
			console.error('Error adding product to cart:', error);
		}
	};

	return (
		<div className="carousel-item shadow-md rounded-md p-3 hover:overflow-visible flex flex-col gap-3 relative transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
			<img src={pic || ''} className="rounded-box hover:cursor-pointer" />
			<div className="card-body">
				<h2 className="card-title flex items-center">
					<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
						U<span className="text-yellow-500 rounded">I</span>R
					</span>{' '}
					{title || ''}
				</h2>
				<button
					onClick={addToCart}
					className="bg-[#2d507d] hover:bg-blue-800 mt-2 text-white rounded-md p-2"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default CardCarouel;
