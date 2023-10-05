import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  //   const { orderid } = await request.json();
  //   console.log(params);

  try {
    await connectToDB();

    const user = await User.find({});
    if (!user) return new Response("Users Not Found", { status: 404 });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
