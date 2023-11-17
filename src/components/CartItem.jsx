/* eslint-disable react/prop-types */
import { HiOutlineTrash } from 'react-icons/hi';
import axios from 'axios';

function CartItem(props) {
	const handleDelete = async () => {
		try {
			// Replace with your actual API endpoint
			await axios.delete(
				`http://localhost:8080/api/carts/2/delProduct/${props.id}`
			);
			// After successful deletion, you may want to update the UI or trigger a fetch
			// props.setProductCart(
			// 	props.productCart.filter((item) => item.id !== props.id)
			// );
			console.log('Product deleted successfully');
			props.fetchProducts();
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	};

	return (
		<li className="w-full flex flex-row border-b-2 border-gray-200 gap-2 mx-auto h-full p-2 hover:bg-slate-200 hover:cursor-pointer rounded-md  ">
			<img src={props.logo || ''} alt="" className="rounded-full w-16" />
			<div className="flex flex-col grow gap-2">
				<h1 className="text-sm pt-2">
					<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
						U<span className=" text-yellow-500 rounded ">I</span>R
					</span>{' '}
					{props.title || ''}
				</h1>
				<h3 className="text-xs">
					<span className="font-bold">{props.price || ''} DH</span>/Month
				</h3>
			</div>
			<div className="order-last w-8 flex justify-center items-center">
				<button
					onClick={handleDelete}
					className="p-2 h-10 rounded-full bg-red-500 text-white border border-red-500 hover:bg-transparent hover:text-red-500"
				>
					<HiOutlineTrash />
				</button>
			</div>
		</li>
	);
}

export default CartItem;
