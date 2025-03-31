import { User as NextAuthUser } from "@auth/core/types";

// Extend NextAuth types
declare module "@auth/core" {
  interface User extends NextAuthUser {
    role: string;
    phoneNumber?: string;
    isNewUser?: boolean;
  }

  interface Session {
    user: User & {
      id: string;
      role: string;
      isNewUser?: boolean;
    };
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: string;
    phoneNumber?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      isNewUser?: boolean;
      name?: string;
      email?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    isNewUser?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    isNewUser?: boolean;
  }
}
