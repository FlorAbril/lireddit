import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./constants"
// import { Post } from "./entities/Post"
import microCongif from './mikro-orm.config'
// import { RequiredEntityData } from "@mikro-orm/core/typings"

const main = async () => {
  const orm = await MikroORM.init(microCongif)
  await orm.getMigrator().up()
  // const post = orm.em.fork({}).create(Post, {
  //   title: "my first post",
  // } as RequiredEntityData<Post>);
  // await orm.em.persistAndFlush(post)

  // const posts = await orm.em.find(Post, {})
  // console.log(posts)

}

main().catch((err) => {
  console.error(err)
}
)