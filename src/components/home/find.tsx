import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function Find() {
	return (
		<section className=" w-[96%] mx-auto flex flex-col gap-12 py-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div
					style={{ backgroundImage: "url('/images/house5.jpg')" }}
					className=" h-[30rem] md:h-[35rem] w-full bg-cover bg-center bg-no-repeat rounded-2xl">
					<div className="bg-black/20 w-full h-full flex justify-center items-center rounded-2xl border border-black/20">
						<Card className=" backdrop-blur-sm bg-white/30 p-4 text-white max-w-sm w-full">
							<div className="flex gap-6 items-center">
								<span className="rounded-full border border-border p-2 bg-transparent">
									<ChevronLeft className=" w-6 h-6" />
								</span>
								<h2 className="text-xl font-medium">Find Hotels</h2>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<Card className="p-4">
									<h4 className="text-sm text-muted-foreground">Check in</h4>
									<div className="flex justify-between items-center gap-2">
										<span>24</span>
										<span>Dec</span>
									</div>
								</Card>
								<Card className="p-4">
									<h4 className="text-sm text-muted-foreground">Check out</h4>
									<div className="flex justify-between items-center gap-2">
										<span>24</span>
										<span>Dec</span>
									</div>
								</Card>
							</div>
							<div>
								<Card className="py-4">
									<h4 className="text-sm px-2 text-muted-foreground">
										Guest and Rooms
									</h4>
									<Select defaultValue="2-adult-1-room">
										<SelectTrigger className="w-full border-none outline-none shadow-none">
											<SelectValue placeholder="Select Guests and Rooms" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectItem value="2-adult-1-room">
													2 Adult, 1 Room
												</SelectItem>
												<SelectItem value="3-adult-2-rooms">
													3 Adult, 2 Rooms
												</SelectItem>
												<SelectItem value="4-adult-2-rooms">
													4 Adult, 2 Rooms
												</SelectItem>
												<SelectItem value="5-adult-2-rooms">
													5 Adult, 2 Rooms
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</Card>
							</div>
							<div>
								<Button className="w-full rounded-3xl">Search</Button>
							</div>
						</Card>
					</div>
				</div>
				<div className="flex flex-col gap-6">
					<div className="flex gap-4">
						<span className=" p-3 rounded-full border border-border">
							<ArrowLeft className=" w-6 h-6" />
						</span>
						<span className=" p-3 rounded-full border border-border">
							<ArrowRight className=" w-6 h-6" />
						</span>
					</div>
					<div className="flex flex-col gap-6">
						<h1 className="text-3xl md:text-4xl">Sydney, Austrialia</h1>
						<p className="text-sm w-full md:w-3/4">
							This newly hotel is located in the heart of the city, just a short
							walk from the suburbs. The rooms are spacious and well appointed,
							with a balcony overlooking the ocean. The breakfast is delicious
							and the service is friendly and helpful.
						</p>
					</div>
					<div className="flex gap-4 flex-wrap">
						<Badge className=" rounded-2xl text-sm md:text-base font-light">
							Tiny Homes
						</Badge>
						<Badge className=" rounded-2xl text-sm md:text-base font-light">
							Camping
						</Badge>
						<Badge className=" rounded-2xl text-sm md:text-base font-light">
							Beautiful Views
						</Badge>
						<Badge className=" rounded-2xl text-sm md:text-base font-light">
							Amazing Pools
						</Badge>
						<Badge className=" rounded-2xl text-sm md:text-base font-light">
							+12
						</Badge>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="w-full h-[10rem] rounded-xl">
							<img
								src="/images/house1.jpg"
								alt="house sample"
								className="h-full w-full object-cover rounded-2xl"
							/>
						</div>
						<div className="w-full h-[10rem] rounded-xl">
							<img
								src="/images/house2.jpg"
								alt="house sample"
								className="h-full w-full object-cover rounded-2xl"
							/>
						</div>
						<div className="w-full h-[10rem] rounded-xl">
							<img
								src="/images/house3.jpg"
								alt="house sample"
								className="h-full w-full object-cover rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
