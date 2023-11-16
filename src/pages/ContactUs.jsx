function ContactUs() {
	return (
		<div className="w-full flex-grow mt-2 bg-white flex flex-col md:items-center md:justify-items-center ">
			<div className="w-full p-6 md:p-0 md:w-1/3 flex flex-col justify-between gap-2 ">
				<div className="font-bold font-mono  mt-[40px] text-2xl mx-auto">
					Send Us a Message
				</div>
				<p>
					We value our customers and are always here to help. If you have any
					questions or need assistance with anything or you can just say hi 👋,
					please don’t hesitate to contact us. Our team is dedicated to
					providing you with the best possible service and support. We look
					forward to hearing from you.
				</p>
				<input
					className="border-2 border-zinc-400 focus:border-zinc-600 p-3 rounded-lg"
					type="text"
					required
					placeholder="Full Name..."
				/>
				<input
					className="border-2 border-zinc-400 focus:border-zinc-600 p-3 rounded-lg"
					type="email"
					required
					placeholder="Email..."
				/>
				<textarea
					className="rounded-lg  border-2 border-zinc-400  focus:border-blue-400 p-3 "
					name=""
					id=""
					cols="30"
					rows="10"
					required
					placeholder="Message..."
				></textarea>
				<div
					className="py-3 mb-[50px] text-white border-2 bg-blue-500 text-center  hover:bg-transparent hover:text-blue-600 rounded-md border-blue-500"
				>
					Submit
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
