import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();


async function test() {
    // const token = await db.sMSToken.create({ //index.d.ts에서 사용중인 함수명으로 가져옴
    //     data: {
    //         token: "122111",
    //         user_id: 2
    //     }
    // })
    const token = await db.sMSToken.findMany({
        where: {
            user_id: 2,
        } ,
        include: {
            user: true
        }
    })
    console.log(token);
    // const user = await db.user.create({
    //     data: {
    //         username:"test2",
    //     }
    // })
    // const user = await db.user.findMany({
    //     where: {
    //         username: {
    //             contains: "est",
    //         }
    //     }
    // })

    // console.log(user);
}
test();

