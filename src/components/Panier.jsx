/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import CartItem from './CartItem';
import axios from 'axios';
import picLogo from '../assets/logo.png';

function Panier() {
	const [total, setTotal] = useState(0);
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const response = await axios.get(
				'http://localhost:8080/api/carts/products/2'
			);

			const productsData = response.data;
			setProducts(productsData);
			console.log('Products retrieved successfully:', productsData);
		} catch (error) {
			console.error('Error retrieving products:', error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []); // This effect runs only once on mount to fetch initial products

	useEffect(() => {
		// Calculate the total only when the products array changes
		setTotal(
			products &&
				products.reduce(
					(acc, item) => parseFloat(acc) + parseFloat(item.price),
					0
				)
		);
	}, [products]);

	return (
		<div className="drawer drawer-end">
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle z-999" />
			<div className="drawer-content">
				<label
					htmlFor="my-drawer-4"
					className="rounded-lg hover:cursor-pointer text-slate-400 hover:bg-slate-600 hover:text-white hover:border-slate-600 p-3"
				>
					Panier
				</label>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-3">
					<h1 className="text-lg font-medium text-gray-900">Shopping cart </h1>
					{products &&
						products.map((item) => (
							<CartItem
								logo={picLogo}
								title={item.name}
								price={item.price}
								key={item.id}
								id={item.id}
								products={products}
								setProducts={setProducts}
								fetchProducts={fetchProducts}
							/>
						))}
					<li className="w-full border-t-2 border-gray-200 flex flex-col gap-2 mx-auto h-full p-2 hover:cursor-pointer mt-auto">
						<div className="flex justify-between text-base font-medium text-gray-900">
							<p>Subtotal</p>
							<p>${total ? parseFloat(total) : 0}</p>
						</div>
						<p className="mt-0.5 text-sm mb-3 text-gray-500">
							Shipping and taxes calculated at checkout.
						</p>
						<button className="p-3 bg-red-500 border-2 text-white hover:text-red-400 hover:bg-white rounded-md border-red-400 w-[80%] mx-auto">
							Valider la commande
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Panier;
