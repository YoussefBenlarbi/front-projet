import logo from '../assets/logo.png';
function Panier() {
	return (
		<div className="drawer drawer-end  ">
			<input id="my-drawer-4" type="checkbox" className="drawer-toggle z-999 " />
			<div className="drawer-content">
				{/* Page content here */}
				<label
					htmlFor="my-drawer-4"
					className="rounded-lg text-slate-400  hover:bg-slate-600 hover:text-white  hover:border-slate-600 p-3"
				>
					Panier
				</label>
			</div>
			<div className="drawer-side ">
				<label
					htmlFor="my-drawer-4"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className=" p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col gap-3 ">
					{/* Sidebar content here */}

					<h1 className="text-lg font-medium text-gray-900">Shopping cart </h1>
					<li className="w-full flex border-b-2 border-gray-200 flex-row  gap-2 mx-auto h-full p-2 hover:bg-slate-200 hover:cursor-pointer rounded-md  ">
						{/* <a className=""> */}
						<img src={logo} alt="" className="rounded-full w-16" />
						<div className="flex flex-col gap-2">
							<h1 className="text-sm pt-2">
								<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
									U<span className=" text-yellow-500 rounded ">I</span>R
								</span>{' '}
								Shirt
							</h1>
							<h3 className="text-xs">
								<span className="font-bold">600 DH</span>/Month
							</h3>
						</div>
						{/* </a> */}
					</li>
					<li className="w-full flex flex-row border-b-2 border-gray-200 gap-2 mx-auto h-full p-2 hover:bg-slate-200 hover:cursor-pointer rounded-md  ">
						{/* <a className=""> */}
						<img src={logo} alt="" className="rounded-full w-16" />
						<div className="flex flex-col gap-2">
							<h1 className="text-sm pt-2">
								<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
									U<span className=" text-yellow-500 rounded ">I</span>R
								</span>{' '}
								Shirt
							</h1>
							<h3 className="text-xs">
								<span className="font-bold">600 DH</span>/Month
							</h3>
						</div>
						{/* </a> */}
					</li>
					<li className="w-full flex flex-row border-b-2 border-gray-200 gap-2 mx-auto h-full p-2 hover:bg-slate-200 hover:cursor-pointer rounded-md  ">
						{/* <a className=""> */}
						<img src={logo} alt="" className="rounded-full w-16" />
						<div className="flex flex-col gap-2">
							<h1 className="text-sm pt-2">
								<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
									U<span className=" text-yellow-500 rounded ">I</span>R
								</span>{' '}
								Shirt
							</h1>
							<h3 className="text-xs">
								<span className="font-bold">600 DH</span>/Month
							</h3>
						</div>
						{/* </a> */}
					</li>
					{/* <li>
						<a className="w-full p-3 mx-auto h-full ">Sidebar Item 1</a>

					</li> */}
					{/* <li className="mt-auto border-t-2 border-gray-200"></li> */}
					<li className="w-full border-t-2 border-gray-200 flex flex-col gap-2 mx-auto h-full p-2  hover:cursor-pointer  mt-auto">
						<div className="flex justify-between text-base font-medium text-gray-900">
							<p>Subtotal</p>
							<p>$262.00</p>
						</div>
						<p className="mt-0.5 text-sm mb-3 text-gray-500">
							Shipping and taxes calculated at checkout.
						</p>
						<button className="p-3 bg-red-400 border-2 text-white hover:text-red-400  hover:bg-white rounded-md border-red-400 w-[80%] mx-auto">
							Valider la commande
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Panier;
