import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient;

if (process.env.NODE_ENV === "development") {
  // This is a global variable that will be used to share the PrismaClient instance
  const globalWithPrismaClient = global as typeof globalThis & {
    prismaClient?: PrismaClient;
  };

  if (!globalWithPrismaClient.prismaClient) {
    globalWithPrismaClient.prismaClient = new PrismaClient();
  }

  prismaClient = globalWithPrismaClient.prismaClient;
} else {
  prismaClient = new PrismaClient();
}

export default prismaClient;
