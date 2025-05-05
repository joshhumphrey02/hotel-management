'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModeToggle } from '../theme/toggle';
import { Button } from '../ui/button';
import Link from 'next/link';
import { User } from 'lucia';
import { logout } from '@/actions/auth';

export default function Header({ user }: { user: User | null }) {
	return (
		<header className="pt-8 pb-2 flex flex-col md:flex-row justify-between text-white items-center border-b border-gray-300">
			<div className="flex gap-4 w-full md:w-auto justify-between md:justify-start items-center">
				<h1 className="text-xl font-medium mb-2">Wanderlust</h1>
				<Tabs defaultValue="stay">
					<TabsList className="bg-white/20 rounded-2xl p-0 h-fit">
						<TabsTrigger
							className=" py-py md:py-1 text-xs md:text-sm h-7 md:h-9 text-white px-3 data-[state=active]:text-black rounded-2xl"
							value="stay">
							Stays
						</TabsTrigger>
						<TabsTrigger
							className=" py-py md:py-1 text-xs md:text-sm h-7 md:h-9 text-white px-3 data-[state=active]:text-black rounded-2xl"
							value="experience">
							Experience
						</TabsTrigger>
					</TabsList>
					<TabsContent value="stay"></TabsContent>
					<TabsContent value="experience"></TabsContent>
				</Tabs>
				<div className=" md:hidden">
					<ModeToggle className="text-black dark:text-white" />
				</div>
			</div>
			<div className="md:flex gap-4 items-center hidden">
				<ModeToggle className="text-black dark:text-white" />
				{user ? (
					<Button
						onClick={async () => {
							await logout();
						}}
						size={'lg'}>
						Logout
					</Button>
				) : (
					<Link href={'/login'}>
						<Button size={'lg'}>Login</Button>
					</Link>
				)}
			</div>
		</header>
	);
}
