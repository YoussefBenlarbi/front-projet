// import jobintech from '../assets/JobInTech.jpeg';
import logo from '../assets/logo.png';
import { slide as Menu } from 'react-burger-menu';

import Panier from './Panier';
import menuStyle from './menuStyle';
function Navbar() {
	return (
		<div className="navbar bg-base-100   shadow-md flex-none h-16">
			<div className="flex-1">
				{/* <a className="btn btn-ghost text-xl">Uir-Shop</a> */}
				<img
					alt="Tailwind CSS Navbar component"
					src={logo}
					className="w-16 ml-4 "
				/>
			</div>
			<div className=" gap-2 ">
				<Panier />
				{/* //TODO Search Input   */}
				{/* <div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div> */}
				<ul className="list-none whitespace-nowrap  space-x-4 md:flex hidden ">
					<li className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3">
						Uir Shop
					</li>
					<li className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3">
						Products
					</li>
					<li className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3">
						Contact us
					</li>
					<li className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3">
						About us
					</li>
				</ul>
				<div className='md:hidden   '>
                    <Menu right styles={menuStyle} >
                        <div className="flex list-none">
                            <div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
                                <a to="/">Uir Shop</a>
                            </div>
                            <div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
                                <a to="cars">Products</a>
                            </div>
                            <div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
                                <a to="contacts">Contact us</a>
                            </div>
                            <div className=" md:text-base  text-white text-xl mb-3 focus:text-whitefont-medium relative mr-1 sm:m-5 flex  justify-center  items-center cursor-pointer">
                                <a to="register">About us</a>
                            </div>
                        </div>
                    </Menu>
                </div>

				{/* //TODO Jobintech menu  */}

				{/* <div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img alt="Tailwind CSS Navbar component" src={jobintech} />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>

						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
}

export default Navbar;
