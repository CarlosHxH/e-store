import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { compare } from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { User, sequelize } from "./sequelize";

export const authOptions: NextAuthOptions = {

  adapter: SequelizeAdapter(sequelize as any),
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials:any) {
        let user = await User.findOne({ where: { email: credentials.email }}) as any;
        if (!user || !compare(credentials.password, user?.password!)) {return null}
        return user as any;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as any;
        return { ...token, id: u.id, randomKey: u.randomKey };
      }
      return token;
    },
  },
};
