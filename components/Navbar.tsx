export default function Navbar() {
	return (
		<nav className="w-full max-w-[1920px] mx-auto 2xl:px-[17.313rem] md:bg-main px-5 fixed inset-0 md:h-[5rem] h-[3.75rem] bg-navbg flex items-center justify-between z-50">
			<div className="text-center text-stone-100 md:text-lg lg:text-2xl text-[16.85px] font-medium font-['Raleway'] uppercase md:leading-normal md:tracking-[6px] leading-[18.38px] tracking-[4.59px]">
				Luxury RENTALS
			</div>
			<div className="w-6 h-6 relative md:hidden">
				<div className="w-6 h-6 left-0 top-0 absolute">
					<img src="logo.svg" alt="" className="brightness-100" />
				</div>
			</div>

			<div className="justify-center items-center gap-5 md:flex hidden">
				<div className="p-2.5 justify-center items-center gap-2.5 flex">
					<div className="text-center text-white ld:text-lg font-normal font-['Rufina'] uppercase leading-normal tracking-wide">
						villas
					</div>
				</div>
				<div className="p-2.5 justify-center items-center gap-2.5 flex">
					<div className="text-white ld:text-lg font-normal font-['Rufina'] uppercase leading-normal tracking-wide">
						about us
					</div>
				</div>
				<div className=" p-2.5 justify-center items-center gap-2.5 flex">
					<div className="text-white ld:text-lg font-normal font-['Rufina'] uppercase leading-normal tracking-wide">
						contact
					</div>
				</div>
			</div>
		</nav>
	);
}
