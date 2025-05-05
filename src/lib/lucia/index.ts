import { Lucia, TimeSpan } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { User, PrismaClient } from '@prisma/client';

const client = new PrismaClient();
const adapter = new PrismaAdapter(client.userSession, client.user);

export const lucia = new Lucia(adapter, {
	getUserAttributes: (attributes) => {
		return {
			id: attributes.id,
			email: attributes.email,
			firstName: attributes.firstName,
			lastName: attributes.lastName,
		};
	},
	sessionExpiresIn: new TimeSpan(30, 'd'),
	sessionCookie: {
		name: 'session',
		expires: true,
		attributes: {
			secure: false,
		},
	},
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseSessionAttributes: DatabaseSessionAttributes;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseSessionAttributes {}
interface DatabaseUserAttributes extends Omit<User, 'password'> {}
