import React from "react";
import classes from "./homePage.module.scss";

import ImageAnimation from "./ImageAnimation/ImageAnimation";

import SocialLink from "../../common/SocialLink/SocialLink";
import Spinner from "../../common/Spinner/Spinner";

import resume from "../../../../public/documents/resume.pdf";
import { useLanguage } from "../../../contexts/LanguageContext";

const HomePage: React.FC = () => {
	// TODO: Make spinner appear when Rasmus-image is loading
	// TODO: Hide waves when overflow on mobile

	const language = useLanguage();

	const englishIntro = (
		<div className={classes.startText}>
			<span>Hi and welcome!</span>
			<br />
			My name is Rasmus Rudling and I'm in the fifth and final year of my
			degree in Master of Science in Engineering at KTH Royal Institute of
			Technology. I'm currently studying for a{" "}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.kth.se/en/studies/master/computer-science"
				className="linkStyle"
			>
				master's in Computer Science
			</a>{" "}
			where I've specialized to learn about{" "}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.kth.se/student/kurser/program/TCSCM/20202/inriktningar?l=en"
				className="linkStyle"
			>
				cognitive systems
			</a>
			. On this website, you can find my previous work, and in the future,
			I will also create a blog section where I will talk about
			technological concepts I'm interested in. If you have any questions
			or just want to get in touch, you are more than welcome to contact
			me!
		</div>
	);

	const swedishIntro = (
		<div className={classes.startText}>
			<span>Hej och välkommen!</span>
			<br />
			Mitt namn är Rasmus Rudling och jag går femte och sista året på min
			civilingejörsutbildning på KTH. Jag läser en{" "}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.kth.se/en/studies/master/computer-science"
				className="linkStyle"
			>
				master i datalogi
			</a>{" "}
			där jag har specialiserat mig på att lära mig om{" "}
			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.kth.se/student/kurser/program/TCSCM/20202/inriktningar?l=sv"
				className="linkStyle"
			>
				kognitiva system
			</a>
			. På den här hemsidan kan du hitta ett urval av de projekt jag varit
			en del av, och i framtiden planerar jag även på att bygga en
			bloggsektion där jag kommer att prata om tekniska koncept som
			intresserar mig. Om du har några frågor eller bara vill ta kontakt
			så är du mer än välkommen att höra av dig till mig!
		</div>
	);

	return (
		<div className={classes.FrontPage}>
			<div>
				<ImageAnimation />
			</div>

			<div className={classes.socialContainer}>
				{language === "en" ? englishIntro : swedishIntro}

				<div className={classes.socialLinks}>
					<SocialLink
						socialIcon="github"
						text="github.com/rrudling"
						linkAction="visit"
						onClickHandler={() => {
							window.open(
								"https://www.github.com/rrudling",
								"_blank"
							);
						}}
					/>

					<SocialLink
						socialIcon="linkedin"
						text="linkedin.com/in/rrudling"
						extraStyle={{
							marginTop: "20px",
						}}
						linkAction="visit"
						onClickHandler={() => {
							window.open(
								"https://www.linkedin.com/in/rrudling",
								"_blank"
							);
						}}
					/>

					<SocialLink
						socialIcon="mail"
						text="rasmusrudling@gmail.com"
						extraStyle={{
							marginTop: "20px",
						}}
						linkAction="copy"
						secondIcon="check"
					/>

					<SocialLink
						socialIcon="resume"
						text={
							language === "en"
								? "Check out my resume!"
								: "Kolla in mitt CV!"
						}
						extraStyle={{
							marginTop: "20px",
						}}
						linkAction="download"
						onClickHandler={() => {
							window.open(
								process.env.PUBLIC_URL +
									"/documents/rasmus_rudling_resume.pdf",
								"_blank"
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
