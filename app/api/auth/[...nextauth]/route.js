import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        // every NextJs route is known as serverless route -> this is lambda function -> dynamodb -> means opens up only when it gets called. -> So, everytime it gets called, it needs to spin up the server and make a connection to the database. -> That is great, because we don't have to keep our server running constantly but we do have to actually make a connection to the database. -> For that reason, we are making database.js file in utils folder.

        await connectToDB();

        // check if a user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });

        //if not, create a user   -> (for that, creating model, user.js, based on user will be created)
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
