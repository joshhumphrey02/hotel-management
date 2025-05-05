'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { signup } from '@/actions/auth';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});
	const formHandler = async (e: any) => {
		e.preventDefault();
		if (form.firstName.length < 2) {
			return toast.warning('Invalid first name');
		} else if (form.lastName.length < 2) {
			return toast.warning('Invalid last name');
		} else if (!form.email.endsWith('@gmail.com')) {
			return toast.warning('Invalid email address');
		} else if (form.password.length < 7) {
			return toast.warning('Password must be at least 8 characters');
		}
		setLoading(true);
		const res = await signup({ ...form });
		setLoading(false);
		if (res.error) {
			return toast.error(res.error);
		}
		if (res.success) {
			toast.success('Account created successfully');
			return router.push('/');
		}
	};
	return (
		<>
			<form onSubmit={formHandler} className={cn('flex flex-col gap-6')}>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-3xl font-bold">Create your account</h1>
					<p className="text-balance text-sm text-muted-foreground">
						Enter your email below to create to your account
					</p>
				</div>
				<div className="grid gap-6">
					<div className="grid gap-2">
						<Label htmlFor="firstName">First Name</Label>
						<Input
							defaultValue={form.firstName}
							onChange={(e) =>
								setForm((prev) => ({ ...prev, firstName: e.target.value }))
							}
							id="firstName"
							type="text"
							placeholder="John"
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="lastName">Last Name</Label>
						<Input
							defaultValue={form.lastName}
							onChange={(e) =>
								setForm((prev) => ({ ...prev, lastName: e.target.value }))
							}
							id="lastName"
							type="text"
							placeholder="Doe"
							required
						/>
					</div>
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
						Create Account
					</Button>
				</div>
				<div className="text-center text-sm">
					Already have an account?{' '}
					<Link href="/login" className="underline underline-offset-4">
						Login
					</Link>
				</div>
			</form>
		</>
	);
}
