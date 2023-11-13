/*import { transporter, mailOptions } from "../../components/Config/nodemailer";
import formidable from "formidable";
import fs from 'fs';


export default async function handler(request, response) {
	if (request.method === "POST") {

		try {
			const textData = JSON.parse(data.textData);
			console.log("Parsed textData:", textData);
			const { name, email, message, requestType } = textData;

			await transporter.sendMail({
				...mailOptions,
				subject: `Neue Anfrage Thema: ${requestType} von: ${name}`,
				text: "This is a text",
				html: `<h1>Neue Anfrage über unsere Homepage!</h1><p>von: ${name}</p><p>email: ${email}</p><p>Nachricht: ${message}</p><p>Anfragetyp: ${requestType}</p>`,
				attachments: [
					{
						filename: data.file.name,
						path: __dirname + `/${data.file.name}`,
					},
				],
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
*/

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
		console.log(data.fields);
		if (data.error) {
			return res.status(500).json({ error: "Error parsing form data." });
		}

		try {
			// Annahme: Du hast Zugriff auf die erforderlichen Variablen wie uploadedFile, targetPath usw.
			await transporter.sendMail({
				...mailOptions,
				subject: `Neue Anfrage Thema: Bewerbung von: ${data.fields.name[0]}`,
				text: "This is a text",
				html: `<h1>Neue Anfrage über unsere Homepage!</h1><p>von: ${data.fields.name[0]}</p><p>email: ${data.fields.email[0]}</p><p>Nachricht: ${data.fields.message[0]}</p><p>Frühstmöglicher Arbeitsbeginn: ${data.fields.earliestWorkBegin[0]}</p>`,
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

/*



import multiparty from "multiparty";

const SeparatedData = async (req, res) => {
	const form = new multiparty.Form();
	const data = await new Promise((resolve, reject) => {
		form.parse(req, function (err, fields, files) {
			if (err) reject({ err });
			resolve({ fields, files });
		});
	});
	console.log(`data: `, JSON.stringify(data));

	console.log(data.fields.);

	res.status(200).json({ success: true });
};
export default SeparatedData;
export const config = {
	api: {
		bodyParser: false,
	},
};
*/
