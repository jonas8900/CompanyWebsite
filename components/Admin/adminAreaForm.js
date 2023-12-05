import styled from "styled-components";
import useSWR from "swr";
import { JobData } from "../Career/JobData";
import JobInformationCardForAdmin from "../Career/JobInformationCardForAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleXmark,
	faSpinner,
	faSquareMinus,
	faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Greenbutton from "../Buttons/GreenButton";
import { Link } from "react-scroll/modules";
import { useSession } from "next-auth/react";

export default function AdminAreaForm() {
	const [openAddForm, setOpenAddForm] = useState(false);
	const [qualifications, setQualifications] = useState([``]);
	const [tasks, setTasks] = useState([``]);
	const [whatWeOffer, setWhatWeOffer] = useState([``]);
	const [openEditForm, setOpenEditForm] = useState(false);
	const [currentEditJobId, setCurrentEditJobId] = useState("");
	const { data: session } = useSession();
	const { data, isLoading } = useSWR("api/getJobData", {
		fallbackData: JobData,
	});
	const [resetter, setResetter] = useState(false);
	const filteredJob = data.find((job) => job._id === currentEditJobId);

	useEffect(() => {
		setResetter(true);
	}, [resetter]);

	if (isLoading) {
		return <StyledLoadingIcon icon={faSpinner} spinPulse />;
	}

	async function handleDeleteFunction(id) {
		const alertWindow = window.confirm(
			"Sind sie sicher, dass sie diesen Job löschen wollen?"
		);
		if (alertWindow) {
			await fetch(`/api/deleteJob`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id }),
			});
			alert("Job wurde erfolgreich entfernt");
		}

		setResetter(!resetter);
	}

	function handleOpenFormToAddJob() {
		setOpenAddForm(!openAddForm);
	}

	function handleOpenFormToEditJob(id) {
		setOpenEditForm(!openEditForm);
		setCurrentEditJobId(id);
	}

	async function handleSubmitToAddJob(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const qualificationArray = [];
		const taskArray = [];
		const whatWeOfferArray = [];

		for (const key in data) {
			if (key.includes("qualification")) {
				qualificationArray.push(data[key]);
			} else if (key.includes("task")) {
				taskArray.push(data[key]);
			} else if (key.includes("offer")) {
				whatWeOfferArray.push(data[key]);
			}
		}

		const jobData = {
			jobTitle: data.jobTitle,
			introduction: data.introduction,
			qualification: qualificationArray,
			tasks: taskArray,
			whatWeOffer: whatWeOfferArray,
		};

		const response = await fetch("/api/addJob", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jobData),
		});

		if (!response.ok) {
			alert("Es ist ein fehler aufgetreten, bitte versuche es erneut");
		} else {
			alert("Job wurde erfolgreich hinzugefügt");
		}
		event.target.reset();
	}

	function handleAddInput(focusedInput) {
		if (focusedInput === qualifications) {
			setQualifications([...qualifications, ``]);
			if (filteredJob !== undefined) {
				const qualificationOfFilteredJob = filteredJob.qualification;
				qualificationOfFilteredJob.push(``);
			}
		} else if (focusedInput === tasks) {
			setTasks([...tasks, ``]);
			if (filteredJob !== undefined) {
				const tasksOfFilteredJob = filteredJob.tasks;
				tasksOfFilteredJob.push(``);
			}
		} else if (focusedInput === whatWeOffer) {
			setWhatWeOffer([...whatWeOffer, ``]);
			if (filteredJob !== undefined) {
				const whatWeOfferOfFilteredJob = filteredJob.whatWeOffer;
				whatWeOfferOfFilteredJob.push(``);
			}
		} else {
			alert("Error");
		}
	}

	function handleDeleteInput(focusedInput) {
		if (focusedInput === qualifications) {
			qualifications.pop();
			setQualifications([...qualifications]);
			if (filteredJob !== undefined) {
				const qualificationOfFilteredJob = filteredJob.qualification;
				qualificationOfFilteredJob.pop();
			}
		} else if (focusedInput === tasks) {
			tasks.pop();
			setTasks([...tasks]);
			if (filteredJob !== undefined) {
				const tasksOfFilteredJob = filteredJob.tasks;
				tasksOfFilteredJob.pop();
			}
		} else if (focusedInput === whatWeOffer) {
			whatWeOffer.pop();
			setWhatWeOffer([...whatWeOffer]);
			if (filteredJob !== undefined) {
				const whatWeOfferOfFilteredJob = filteredJob.whatWeOffer;
				whatWeOfferOfFilteredJob.pop();
			}
		} else {
			alert("Error");
		}
	}

	async function handleSubmitToEditJob(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const qualificationArray = [];
		const taskArray = [];
		const whatWeOfferArray = [];

		for (const key in data) {
			if (key.includes("qualification")) {
				qualificationArray.push(data[key]);
			} else if (key.includes("task")) {
				taskArray.push(data[key]);
			} else if (key.includes("offer")) {
				whatWeOfferArray.push(data[key]);
			}
		}

		const jobData = {
			_id: currentEditJobId,
			jobTitle: data.jobTitle,
			introduction: data.introduction,
			qualification: qualificationArray,
			tasks: taskArray,
			whatWeOffer: whatWeOfferArray,
		};

		const response = await fetch(`/api/changeJob`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(jobData),
		});

		if (!response.ok) {
			alert("Es ist ein fehler aufgetreten, bitte versuche es erneut");
		} else {
			alert("Job wurde erfolgreich geändert");
		}

		setOpenEditForm(false);
	}

	return (
		<StyledMain>
			{session ? (
				<>
					<StyledHeadlineSection>
						<StyledHeadline>Admin Area</StyledHeadline>
						<StyledParagraph>Willkommen im Admin Bereich</StyledParagraph>
						<StyledParagraph>
							Hier können Sie Jobs entfernen, ändern oder hinzufügen
						</StyledParagraph>
					</StyledHeadlineSection>
					<StyledAddFormSection>
						<StyledSubHeadline>Neuen Job hinzufügen</StyledSubHeadline>
						{openAddForm ? (
							<StyledAddForm onSubmit={handleSubmitToAddJob}>
								<StyledExitIcon
									icon={faCircleXmark}
									onClick={handleOpenFormToAddJob}
								/>
								<StyledLabelAndInput>
									<label htmlFor="jobTitle">Job Titel</label>
									<StyledInput
										type="text"
										id="jobTitle"
										name="jobTitle"
										required
									/>
								</StyledLabelAndInput>
								<StyledLabelAndInput>
									<label htmlFor="introduction">Introtext</label>
									<StyledInput
										type="text"
										id="introduction"
										name="introduction"
										required
									/>
								</StyledLabelAndInput>

								<label htmlFor="qualification">Qualifikationen</label>
								{qualifications.map((qualification, index) => (
									<StyledInput
										key={index}
										type="text"
										id={`qualification${index}`}
										name={`qualification${index}`}
										required
									/>
								))}

								<StyledButtonSection>
									<StyledAddNewInputIcon
										icon={faSquarePlus}
										onClick={() => handleAddInput(qualifications)}
									/>
									{qualifications.length > 1 && (
										<StyledDeleteNewInputIcon
											icon={faSquareMinus}
											onClick={() => handleDeleteInput(qualifications)}
										/>
									)}
								</StyledButtonSection>
								<label htmlFor="tasks">Aufgaben</label>
								{tasks.map((task, index) => (
									<StyledInput
										key={index}
										type="text"
										id={`task${index}`}
										name={`task${index}`}
										required
									/>
								))}
								<StyledButtonSection>
									<StyledAddNewInputIcon
										icon={faSquarePlus}
										onClick={() => handleAddInput(tasks)}
									/>
									{tasks.length > 1 && (
										<StyledDeleteNewInputIcon
											icon={faSquareMinus}
											onClick={() => handleDeleteInput(tasks)}
										/>
									)}
								</StyledButtonSection>
								<label htmlFor="whatWeOffer">Was wir bieten</label>

								{whatWeOffer.map((offer, index) => (
									<StyledInput
										key={index}
										type="text"
										id={`offer${index}`}
										name={`offer${index}`}
										required
									/>
								))}
								<StyledButtonSection>
									<StyledAddNewInputIcon
										icon={faSquarePlus}
										onClick={() => handleAddInput(whatWeOffer)}
									/>
									{whatWeOffer.length > 1 && (
										<StyledDeleteNewInputIcon
											icon={faSquareMinus}
											onClick={() => handleDeleteInput(whatWeOffer)}
										/>
									)}
								</StyledButtonSection>
								<StyledAddJobButtonSection>
									<Greenbutton margin={-2} type="submit">
										Job hinzufügen
									</Greenbutton>
								</StyledAddJobButtonSection>
							</StyledAddForm>
						) : (
							<StyledPlusIcon
								icon={faSquarePlus}
								onClick={handleOpenFormToAddJob}
							/>
						)}
					</StyledAddFormSection>
					<StyledJobSection>
						<StyledSubHeadline id="jobheadline">
							Aktuelle Jobs
						</StyledSubHeadline>
						{openEditForm && (
							<StyledAddForm onSubmit={handleSubmitToEditJob}>
								<Link to="jobheadline" smooth={true} duration={500}>
									<StyledExitIcon
										icon={faCircleXmark}
										onClick={handleOpenFormToEditJob}
									/>
								</Link>
								{data
									.filter((job) => job._id === currentEditJobId)
									.map((filteredJob) => (
										<>
											<StyledLabelAndInput>
												<label htmlFor="jobTitle">Job Titel</label>
												<StyledInput
													type="text"
													id="jobTitle"
													name="jobTitle"
													defaultValue={filteredJob.jobTitle}
													required
												/>
											</StyledLabelAndInput>
											<StyledLabelAndInput>
												<label htmlFor="introduction">Introtext</label>
												<StyledTextArea
													type="textarea"
													cols="60"
													rows="5"
													id="introduction"
													name="introduction"
													defaultValue={filteredJob.introduction}
													required
												/>
											</StyledLabelAndInput>

											<label htmlFor="qualification">Qualifikationen</label>
											{filteredJob.qualification.map((qualification, index) => (
												<StyledInput
													key={index}
													type="text"
													id={`qualification${index}`}
													name={`qualification${index}`}
													defaultValue={qualification}
													required
												/>
											))}
											<StyledButtonSection>
												<StyledAddNewInputIcon
													icon={faSquarePlus}
													onClick={() => handleAddInput(qualifications)}
												/>
												{filteredJob.qualification.length > 1 && (
													<StyledDeleteNewInputIcon
														icon={faSquareMinus}
														onClick={() => handleDeleteInput(qualifications)}
													/>
												)}
											</StyledButtonSection>
											<label htmlFor="tasks">Aufgaben</label>
											{filteredJob.tasks.map((task, index) => (
												<StyledInput
													key={index}
													type="text"
													id={`task${index}`}
													name={`task${index}`}
													defaultValue={task}
													required
												/>
											))}
											<StyledButtonSection>
												<StyledAddNewInputIcon
													icon={faSquarePlus}
													onClick={() => handleAddInput(tasks)}
												/>
												{filteredJob.tasks.length > 1 && (
													<StyledDeleteNewInputIcon
														icon={faSquareMinus}
														onClick={() => handleDeleteInput(tasks)}
													/>
												)}
											</StyledButtonSection>
											<label htmlFor="whatWeOffer">Was wir bieten</label>

											{filteredJob.whatWeOffer.map((offer, index) => (
												<StyledInput
													key={index}
													type="text"
													id={`offer${index}`}
													name={`offer${index}`}
													defaultValue={offer}
													required
												/>
											))}
											<StyledButtonSection>
												<StyledAddNewInputIcon
													icon={faSquarePlus}
													onClick={() => handleAddInput(whatWeOffer)}
												/>
												{filteredJob.whatWeOffer.length > 1 && (
													<StyledDeleteNewInputIcon
														icon={faSquareMinus}
														onClick={() => handleDeleteInput(whatWeOffer)}
													/>
												)}
											</StyledButtonSection>
										</>
									))}
								<StyledAddJobButtonSection>
									<Greenbutton margin={-2} type="submit">
										Job ändern
									</Greenbutton>
								</StyledAddJobButtonSection>
							</StyledAddForm>
						)}
						{openEditForm
							? data
									.filter((job) => job._id !== currentEditJobId)
									.map((job) => (
										<JobInformationCardForAdmin
											key={job._id}
											infoText={job.introduction}
											jobtitle={job.jobTitle}
											qualificationText={job.qualification}
											taskText={job.tasks}
											ourOfferText={job.whatWeOffer}
											onClickOnDeleteIcon={() => handleDeleteFunction(job._id)}
											onClickEditIcon={() => handleOpenFormToEditJob(job._id)}
										/>
									))
							: data.map((job) => (
									<JobInformationCardForAdmin
										key={job._id}
										infoText={job.introduction}
										jobtitle={job.jobTitle}
										qualificationText={job.qualification}
										taskText={job.tasks}
										ourOfferText={job.whatWeOffer}
										onClickOnDeleteIcon={() => handleDeleteFunction(job._id)}
										onClickEditIcon={() => handleOpenFormToEditJob(job._id)}
									/>
							  ))}
					</StyledJobSection>
				</>
			) : (
				<>
					<StyledHeadlineSection>
						<StyledHeadline>
							Bitte melden Sie sich an um Zugriff auf diese Seite zu bekommen
						</StyledHeadline>
						<StyledParagraph>
							Wenn Sie bereits angemeldet sind, überprüfen Sie bitte ob Sie die
							richtige Email Adresse benutzt haben.
						</StyledParagraph>
					</StyledHeadlineSection>
				</>
			)}
		</StyledMain>
	);
}

const StyledMain = styled.main`
	margin-top: 0rem;
`;

const StyledHeadlineSection = styled.section`
	padding: 1rem;
	@media (min-width: 1024px) {
		text-align: center;
		display: flex;
		flex-direction: column;
	}
`;

const StyledHeadline = styled.h1`
	color: white;
`;

const StyledParagraph = styled.p`
	color: white;
`;

const StyledAddJobButtonSection = styled.section`
	max-width: 30%;
	margin: auto;
	padding: 0.5rem;
`;

const StyledInput = styled.input`
	width: 70%;
	height: 2rem;
	border: 1px solid grey;
	margin: auto;
	border-radius: 5px;
	padding: 1rem;
	font-size: 1rem;
`;

const StyledTextArea = styled.textarea`
	margin-left: 1rem;
`;

const StyledLabelAndInput = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 1rem;
`;

const StyledLabel = styled.label``;

const StyledAddNewInputIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	margin: 0 auto;
	cursor: pointer;
	color: var(--color-secondary);
`;

const StyledDeleteNewInputIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	margin: 0 auto;
	cursor: pointer;
	color: red;
`;

const StyledButtonSection = styled.section`
	display: flex;
	margin-bottom: 3rem;
`;

const StyledExitIcon = styled(FontAwesomeIcon)`
	color: red;
	width: 2rem;
	height: 2rem;
	position: absolute;
	right: -1rem;
	top: -1rem;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	&:hover {
		color: #fc2c03;
		cursor: pointer;
		scale: 1.1;
	}

	&:active {
		color: black;
	}
`;

const StyledPlusIcon = styled(FontAwesomeIcon)`
	color: var(--color-secondary);
	width: 2rem;
	height: 2rem;
	transition: all 0.2s ease-in-out;
	margin: auto;

	&:hover {
		color: var(--color-primary);
		cursor: pointer;
	}

	&:active {
		color: var(--color-fifth);
	}
`;

const StyledLoadingIcon = styled(FontAwesomeIcon)`
	width: 2rem;
	height: 2rem;
	margin: auto;
	color: var(--color-secondary);
`;

const StyledJobSection = styled.section`
	margin: 2rem 0rem 2rem 2rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 40px;
	@media (min-width: 1024px) {
		gap: 4rem;
		margin: 2rem 20rem 2rem 20rem;
	}
`;

const StyledSubHeadline = styled.h2`
	color: white;
`;

const StyledAddFormSection = styled.section`
	display: flex;
	flex-direction: column;
	margin: 2rem;
	justify-content: center;
	text-align: center;
`;

const StyledAddForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 70%;
	margin: auto;
	gap: 1rem;
	background-color: var(--color-third);
	padding: 1rem;
	border-radius: 5px;
	position: relative;
	@media (max-width: 1024px) {
		width: 100%;
	}
`;
