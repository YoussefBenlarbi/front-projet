import pic1 from '../assets/t-shirt.jpg';
function ProductsCarousel() {
	return (
		<div className="md:mx-auto md:w-[80%] md:max-w-full  mt-8 mb-3 ">
			<div className="carousel carousel-end p-4 space-x-6 bg-white rounded-box  ">
				{/* <div className="carousel-item flex flex-col gap-3 relative overflow-hidden  transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<h2 className="text-center">
						<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
							U<span className=" text-yellow-500 rounded ">I</span>R
						</span>{' '}
						Shirt
					</h2>
					<div className="">
						<button className="bg-blue-500  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div> */}
				<div className="carousel-item  shadow-md rounded-md p-3 flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<div className="card-body ">
						<h2 className="card-title flex items-center">
							<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
								U<span className=" text-yellow-500 rounded ">I</span>R
							</span>{' '}
							Shirt</h2>
						{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
						<button className="bg-blue-500 mt-2  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div>
				<div className="carousel-item   shadow-md rounded-md p-3 flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<div className="card-body " >
						<h2 className="card-title flex items-center">
							<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
								U<span className=" text-yellow-500 rounded ">I</span>R
							</span>{' '}
							Shirt</h2>
						{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
						<button className="bg-blue-500 mt-2  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div>
				<div className="carousel-item   shadow-md rounded-md p-3 flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<div className="card-body " >
						<h2 className="card-title flex items-center">
							<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
								U<span className=" text-yellow-500 rounded ">I</span>R
							</span>{' '}
							Shirt</h2>
						{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
						<button className="bg-blue-500 mt-2  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div>
				<div className="carousel-item   shadow-md rounded-md p-3 flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<div className="card-body" >
						<h2 className="card-title flex items-center">
							<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
								U<span className=" text-yellow-500 rounded ">I</span>R
							</span>{' '}
							Shirt</h2>
						{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
						<button className="bg-blue-500 mt-2  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div>
				<div className="carousel-item  shadow-md rounded-md p-3 flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<div className="card-body ">
						<h2 className="card-title flex items-center">
							<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
								U<span className=" text-yellow-500 rounded ">I</span>R
							</span>{' '}
							Shirt</h2>
						{/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
						<button className="bg-blue-500 mt-2  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div>
				{/* <div className="carousel-item flex flex-col gap-3 relative overflow-hidden transition-transform duration-300 transform scale-100 hover:scale-110 hover:-translate-y-2">
					<img src={pic1} className="rounded-box hover:cursor-pointer" />
					<h2 className="text-center">
						<span className="px-2 mt-2 text-white bg-blue-500 rounded dark:bg-blue-500">
							U<span className=" text-yellow-500 rounded ">I</span>R
						</span>{' '}
						Shirt
					</h2>
					<div className=''>
						<button className="bg-blue-500  text-white rounded-md p-2">
							Add to cart
						</button>
					</div>
				</div> */}
				
				
			</div>
		</div>
	);
}

export default ProductsCarousel;
