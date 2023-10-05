import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const DELETE = async (request, { params: { id } }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await User.findByIdAndRemove(id);

    return new Response("User deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting user", { status: 500 });
  }
};
