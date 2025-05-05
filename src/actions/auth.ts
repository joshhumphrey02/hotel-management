'use server';

import { lucia } from '@/lib/lucia';
import { validateRequest } from '@/lib/lucia/validate-request';
import prisma from '@/lib/prisma';
import { Scrypt } from 'lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface LoginProps {
	email: string;
	password: string;
}

export async function login({ email, password }: LoginProps) {
	try {
		if (!email) {
			return {
				error: 'Please enter your email address',
			};
		}
		if (!password || password.length < 7) {
			return {
				error: 'Password must be atleast 8 characters',
			};
		}
		const existingUser = await prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive',
				},
			},
			select: {
				email: true,
				password: true,
				id: true,
			},
		});

		if (!existingUser) {
			return {
				error: 'Account not found.. Please create account!',
			};
		}
		const isValid = await new Scrypt().verify(existingUser.password, password);
		if (!isValid) {
			return {
				error: 'Password does not match!',
			};
		}
		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		const cookie = await cookies();
		cookie.set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);
		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			error: 'Something went wrong, Try again!',
		};
	}
}

interface SignupProps {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export async function signup({
	firstName,
	lastName,
	email,
	password,
}: SignupProps) {
	try {
		if (!firstName || !lastName || !email || !password) {
			return {
				error: 'Please fill every field!',
			};
		}
		if (password.length < 7) {
			return {
				error: 'Password must be at least 8 characters',
			};
		}
		const existingUser = await prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive',
				},
			},
		});
		if (existingUser) {
			return {
				error: 'Account already exit, please login',
			};
		}
		const hash = await new Scrypt().hash(password);
		const user = await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password: hash,
			},
		});
		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		const cookie = await cookies();
		cookie.set(
			sessionCookie.name,
			sessionCookie.value,
			sessionCookie.attributes
		);
		return {
			success: true,
		};
	} catch (error) {
		console.log(error);
		return {
			error: 'Something went wrong, Try again!',
		};
	}
}

export async function logout(): Promise<{ error: string } | void> {
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: 'No session found',
		};
	}
	await lucia.invalidateSession(session.id);
	const sessionCookie = lucia.createBlankSessionCookie();
	(await cookies()).set(
		sessionCookie.name,
		sessionCookie.value,
		sessionCookie.attributes
	);
	return redirect('/');
}
