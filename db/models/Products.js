import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
	src: { type: String, required: true },
	alt: { type: String, reuquired: true },
	headline: { type: String, required: true },
	infotext: { type: String, required: false },
	productDescription: { type: String, required: false },
	productDetails: [{ type: String, required: true }],
});

const Product =
	mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
