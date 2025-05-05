'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { login } from '@/actions/auth';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const formHandler = async (e: any) => {
		e.preventDefault();
		if (!form.email.endsWith('@gmail.com')) {
			return toast.warning('Invalid email address');
		} else if (form.password.length < 7) {
			return toast.warning('Password must be at least 8 characters');
		}
		setLoading(true);
		const res = await login({ ...form });
		setLoading(false);
		if (res.error) {
			return toast.error(res.error);
		}
		if (res.success) {
			toast.success('Logged in successfully');
			return router.push('/');
		}
	};
	return (
		<form onSubmit={formHandler} className={cn('flex flex-col gap-6')}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-3xl font-bold">Login to your account</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Enter your email below to login to your account
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						defaultValue={form.email}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, email: e.target.value }))
						}
						id="email"
						type="email"
						placeholder="m@example.com"
						required
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
						<a
							href="#"
							className="ml-auto text-sm underline-offset-4 hover:underline">
							Forgot your password?
						</a>
					</div>
					<Input
						defaultValue={form.password}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, password: e.target.value }))
						}
						id="password"
						placeholder="********"
						type="password"
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					{loading && <Loader className=" w-4 h-4 animate-spin" />}
					Login
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{' '}
				<Link href="/signup" className="underline underline-offset-4">
					Sign up
				</Link>
			</div>
		</form>
	);
}
