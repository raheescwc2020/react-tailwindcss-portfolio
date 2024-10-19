import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<div
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
						dangerouslySetInnerHTML={{ __html: bio.bio }}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
