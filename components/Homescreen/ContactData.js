
import styled from "styled-components";
import PhoneIcon from "../Icons/PhoneIcon";
import MailIcon from "../Icons/MailIcon";

export default function ContactData() {
	return (
		<StyledSection>
			<StyledHeadline1>Vertrieb: Tim Dally</StyledHeadline1>
			<StyledArticle>
				<PhoneIcon href="tel:017626246722">0176 262 46722</PhoneIcon>
			</StyledArticle>
			<StyledArticle>
				<MailIcon href="mailto:tim.dally@emb-schulze.de">
					tim.dally@emb-schulze.de
				</MailIcon>
			</StyledArticle>
		</StyledSection>
	);
}

const StyledArticle = styled.article`
	font-size: var(--font-size-subtitle);
	font-weight: 700;
	color: var(--color-fourth);
`;

const StyledHeadline1 = styled.h2`
	text-decoration: underline;
	text-decoration-color: var(--color-secondary);
`;

const StyledSection = styled.section``;
