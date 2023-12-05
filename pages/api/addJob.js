import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import dbConnect from "../../db/connect";
import Job from "../../db/models/Jobs";

export default async function handler(req, res) {
	const session = await getServerSession(req, res, authOptions);


	if (!session) {
		res.status(401).json({ error: "Unauthorized" });
		return;
	}

	await dbConnect();

	if (req.method === "POST") {
		try {
			await Job.create(req.body);
			res.status(200).json({ status: "Job successfully created." });
		} catch (error) {
			console.error(error);
			res.status(400).json({ error: error.message });
		}
	}
}

