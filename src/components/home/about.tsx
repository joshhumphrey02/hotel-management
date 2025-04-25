import { Building2, Castle, Hotel, Warehouse } from 'lucide-react';
import { Button } from '../ui/button';

export default function About() {
	return (
		<section className=" w-[96%] mx-auto flex flex-col gap-12 py-6">
			<div className="flex justify-center">
				<Button
					variant={'outline'}
					className="rounded-3xl px-2 h-8 py-py border-gray-100">
					About us
				</Button>
			</div>
			<div className="flex justify-center">
				<h1 className=" text-center text-3xl md:text-4xl md:w-lg xl:w-xl">
					Each space thoughtfully curated to sparl connection and create lasting
					memories.
				</h1>
			</div>
			<div className="flex justify-center gap-4">
				<div className="flex flex-col justify-center items-center gap-4">
					<span className="p-3 bg-black text-white dark:bg-white dark:text-black rounded-full">
						<Hotel />
					</span>
					<span className="text-sm font-medium">Hotels</span>
				</div>
				<div className="flex flex-col justify-center items-center gap-4">
					<span className="p-3 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-full transition-all duration-700">
						<Warehouse />
					</span>
					<span className="text-sm font-medium">Cabins</span>
				</div>
				<div className="flex flex-col justify-center items-center gap-4">
					<span className="p-3 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-full transition-all duration-700">
						<Building2 />
					</span>
					<span className="text-sm font-medium">Luxe</span>
				</div>
				<div className="flex flex-col justify-center items-center gap-4">
					<span className="p-3 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black rounded-full transition-all duration-700">
						<Castle />
					</span>
					<span className="text-sm font-medium">Castle</span>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-center gap-4 items-center">
				<div className=" w-full md:w-[18rem] h-[16rem] md:h-[20rem]">
					<img
						src={'/images/house1.jpg'}
						alt="house1"
						className="rounded-2xl object-cover w-full h-full"
					/>
				</div>
				<div className=" w-full md:w-[18rem] h-[16rem] md:h-[20rem]">
					<img
						src={'/images/house2.jpg'}
						alt="house1"
						className="rounded-2xl object-cover w-full h-full"
					/>
				</div>
				<div className=" w-full md:w-[18rem] h-[16rem] md:h-[20rem]">
					<img
						src={'/images/house3.jpg'}
						alt="house1"
						className="rounded-2xl object-cover w-full h-full"
					/>
				</div>
			</div>
			<div className="flex justify-between">
				<Button
					variant={'outline'}
					className="border-gray-100 hidden md:flex rounded-2xl px-2 md:px-3 h-8 py-py md:h-10 md:py-1">
					Nearby
				</Button>
				<p className=" w-full md:w-[50%] text-base md:text-2xl xl:text-3xl">
					Find unique stays, unforgettable experiences, and endless
					exploration--where wanderlust meets wonder, adventure, and discovery.
				</p>
			</div>
		</section>
	);
}
