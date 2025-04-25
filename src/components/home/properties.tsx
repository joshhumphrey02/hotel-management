import { Badge } from '../ui/badge';

export default function Properties() {
	return (
		<section className=" w-[96%] mx-auto flex flex-col gap-12 py-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="flex flex-col gap-2">
					<div className="w-full h-[16rem] md:h-[20rem] overflow-hidden rounded-xl">
						<img
							src="/images/house4.jpg"
							alt="hotel room"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<span className="text-base font-medium">Near the beach</span>
							<Badge variant={'outline'}>320+ properties</Badge>
						</div>
						<span className=" text-muted-foreground text-sm">
							1,22 kilometers away
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="w-full h-[16rem] md:h-[20rem] overflow-hidden rounded-xl">
						<img
							src="/images/house6.jpg"
							alt="hotel room"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<span className="text-base font-medium">Swimming pools</span>
							<Badge variant={'outline'}>New</Badge>
						</div>
						<span className=" text-muted-foreground text-sm">
							1,80 kilometers away
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="w-full h-[16rem] md:h-[20rem] overflow-hidden rounded-xl">
						<img
							src="/images/house7.jpg"
							alt="hotel room"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between items-center">
							<span className="text-base font-medium">Pet Welcome</span>
							<Badge variant={'outline'}>New</Badge>
						</div>
						<span className=" text-muted-foreground text-sm">
							1,922 kilometers away
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
