import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";


export default {
  migrations: {
    path: path.join(__dirname,'./migrations'), // path to the folder with migrations
    glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Post],
  dbName: "reddit",
  type: "postgresql",
  user: "postgres",
  password: "postgres",
  debug: !__prod__,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0]