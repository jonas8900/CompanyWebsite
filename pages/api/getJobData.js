import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";

export default async function handler(request, response) {
	await dbConnect();

	if (request.method === "GET") {
		const job = await Job.find();
		return response.status(200).json(job);
	} else {
		return response.status(405).json({ message: "Method not allowed" });
	}
}
