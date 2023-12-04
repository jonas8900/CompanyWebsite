import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";

export default async function handler(request, response) {
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
