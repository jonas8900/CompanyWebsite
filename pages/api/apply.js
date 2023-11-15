import { transporter, mailOptions } from "../../components/Config/nodemailer";
import multiparty from "multiparty";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const form = new multiparty.Form({ maxFilesSize: 10 * 1024 * 1024 });
		console.log("yes");
		const data = await new Promise((resolve, reject) => {
			form.parse(req, function (err, fields, files) {
				if (err) reject({ err });
				resolve({ fields, files });
			});
		});

		if (data.error) {
			return res.status(500).json({ error: "Error parsing form data." });
		}

		try {
			await transporter.sendMail({
				...mailOptions,
				subject: `Neue Anfrage Thema: Bewerbung von: ${data.fields.name[0]}`,
				text: "This is a text",
				html: `<h1>Neue Anfrage über unsere Homepage!</h1><p>von: ${data.fields.name[0]}</p><p>email: ${data.fields.email[0]}</p><p>Nachricht: ${data.fields.message[0]}</p>`,
				attachments: [
					{
						filename: data.files.fileToUpload[0].originalFilename,
						path: data.files.fileToUpload[0].path,
					},
				],
			});

			res.status(200).json({ success: true, message: "Email sent" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Error sending email." });
		}
	} else {
		res.status(405).end();
	}
}
export const config = {
	api: {
		bodyParser: false,
	},
};
