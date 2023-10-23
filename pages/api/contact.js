import { transporter, mailOptions } from "../../components/Config/nodemailer";

export default async function handler(request, response) {
	if (request.method === "POST") {
		const data = request.body;

		try {
			await transporter.sendMail({
				...mailOptions,
				subject: `Neue Anfrage Thema:${data.requestType} von: ${data.name}`,
				text: "This is a text",
				html: `<h1>Neue Anfrage über unsere Homepage!</h1><p>von: ${data.name}</p><p>email: ${data.email}</p><p>Nachricht: ${data.message}</p><p>Anfragetyp: ${data.requestType}</p>`,
			});
			return response
				.status(200)
				.json({ success: true, message: "Email sent" });
		} catch (error) {
			console.log(error);
			return response.status(400).json({ message: error.message });
		}
	}

	response.status(200).json({ status: "OK" });
}
