import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";

export default async function handler(request, response) {
	await dbConnect();

    if (request.method === "DELETE") {
        const id = request.body.id;
        try {
          await Job.findByIdAndDelete(id);
          response
            .status(200)
            .json({ status: `job with id: ${id} successfully deleted.` });
        } catch (error) {
          console.log(error);
          response.status(400).json({ error: error.message });
        }
      }
}
