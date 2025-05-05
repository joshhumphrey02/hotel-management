import About from '@/components/home/about';
import Find from '@/components/home/find';
import Hero from '@/components/home/hero';
import Properties from '@/components/home/properties';
import { validateRequest } from '@/lib/lucia/validate-request';

export default async function Page() {
	const { user } = await validateRequest();
	return (
		<main>
			<Hero user={user} />
			<About />
			<Properties />
			<Find />
		</main>
	);
}
