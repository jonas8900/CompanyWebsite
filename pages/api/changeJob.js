import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(request, response) {
	const session = await getServerSession(request, response, authOptions);

	if (!session) {
		response.status(401).json({ error: "Unauthorized" });
		return;
	}

	await dbConnect();

	if (request.method === "PUT") {
		const id = request.body._id;
		try {
			await Job.findByIdAndUpdate(id, { ...request.body });
			response
				.status(200)
				.json({ status: `job with id: ${id} successfully updated.` });
		} catch (error) {
			console.log(error);
			response.status(400).json({ error: error.message });
		}
	}
}
