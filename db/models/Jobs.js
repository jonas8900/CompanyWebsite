import mongoose from "mongoose";

const { Schema } = mongoose;

const jobSchema = new Schema({
	jobTitle: { type: String, required: true },
	introduction: { type: String, required: true },
	whatWeOffer: [{ type: String, required: true }],
	tasks: [{ type: String, required: true }],
	qualification: [{ type: String, required: true }],
});

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
