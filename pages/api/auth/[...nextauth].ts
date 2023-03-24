import NextAuth, { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions: NextAuthOptions = {
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_CONSUMER_KEY,
			clientSecret: process.env.TWITTER_CLIENT_SECRET,
			version: "2.0"
		}),
	],
	callbacks:{
		async jwt({token, account}){
			if (account){
				token.accessToken=account.access_token
			}
			return token
		},
		async session({session, token, user}){
			session.accessToken=token.accessToken
			return session
		}
	}
}
export default NextAuth(authOptions)