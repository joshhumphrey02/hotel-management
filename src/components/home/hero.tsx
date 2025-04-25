import Header from '../shared/header';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Hero() {
	return (
		<section
			style={{ backgroundImage: 'url("/images/house3.jpg")' }}
			className=" h-svh md:h-dvh bg-cover bg-no-repeat bg-center">
			<div className="bg-black/20 w-full h-full">
				<div className=" w-[96%] mx-auto flex h-full flex-col justify-between">
					<Header />
					<div className="flex justify-between items-center py-6">
						<p className="text-sm md:text-base w-full text-white md:w-[10rem]">
							Find private stays that work for you
						</p>
						<Button
							variant={'outline'}
							className=" rounded-2xl border-gray-100">
							Popular 2025
						</Button>
					</div>
					<div className="flex flex-col md:flex-row justify-between md:items-center mt-auto text-white mb-[20%] xl:mb-[15%] 2xl:mb-[10%] gap-4">
						<h1 className="text-3xl md:text-5xl font-medium md:font-normal flex flex-col gap-1 md:gap-3">
							<span>Stay Unique</span>
							<span>Travel Freely</span>
						</h1>
						<div className="flex items-center bg-white/20 rounded-2xl backdrop-blur-sm h-8 md:h-12 w-full md:w-[30%] max-w-[350px]">
							<Input
								placeholder="Search destinations"
								className="flex-1 border-none text-white h-full text-xs md:text-sm placeholder:text-xs placeholder:text-white bg-transparent ring-0 focus-visible:ring-0 focus-visible:ring-transparent"
							/>
							<Button variant={'ghost'} className=" text-xs md:text-sm">
								Search
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
