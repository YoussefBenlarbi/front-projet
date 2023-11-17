/* eslint-disable react/prop-types */
// import jobintech from '../assets/JobInTech.jpeg';
import logo from '../assets/logo.png';
import { slide as Menu } from 'react-burger-menu';

import Panier from './Panier';
import menuStyle from './menuStyle';
import { Link } from 'react-router-dom';
function Navbar(props) {
	return (
		<div className="navbar bg-base-100   shadow-md flex-none h-16">
			<div className="flex-1">
				{/* <a className="btn btn-ghost text-xl">Uir-Shop</a> */}
				<Link to={"/"}>
					<img
						alt="Tailwind CSS Navbar component"
						src={logo}
						className="w-16 ml-4 hover:cursor-pointer"
					/>
				</Link>
			</div>
			<div className=" gap-2 ">
				<Panier productCart={props.productCart} setProductCart={props.setProductCart}  />
				
				<ul className="list-none whitespace-nowrap  space-x-4 md:flex hidden ">
					<Link
						to="/"
						className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3"
					>
						Uir Shop
					</Link>
					{/* <Link
						to="contacts"
						className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3"
					>
						Products
					</Link> */}
					<Link
						to="contacts"
						className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3"
					>
						Contact us
					</Link>
					<Link
						to="contacts"
						className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3"
					>
						About us
					</Link>
				</ul>
				<div className="md:hidden   ">
					<Menu right styles={menuStyle}>
						<div className="flex list-none">
							<div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
								<Link to="/">Uir Shop</Link>
							</div>
							{/* <div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
								<Link to="contacts">Products</Link>
							</div> */}
							<div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
								<Link to="contacts">Contact us </Link>
							</div>
							<div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
								<Link to="contacts">About us</Link>
							</div>
						</div>
					</Menu>
				</div>

				
			</div>
		</div>
	);
}

export default Navbar;
