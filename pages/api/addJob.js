import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";

export default async function handler(request, response) {
	await dbConnect();
	console.log(request.body);

	if (request.method === "POST") {
		try {
			await Job.create(request.body);
			response.status(200).json({ status: `job successfully created.` });
		} catch (error) {
			console.log(error);
			response.status(400).json({ error: error.message });
		}
	}
}
