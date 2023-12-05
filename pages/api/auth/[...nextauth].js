import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,

			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],

	callbacks: {
		async signIn(user, account, profile) {
			if (user.profile.email == process.env.ALLOWED_ADMIN_EMAIL) {
				return true;
			} else {
				return false;
			}
		},
	},
});
