import React from 'react';
import { ScrollerWrap, ScrollContent } from './style';
import CastCard from './CastCard';

const Scroller = ({ cast }) => {

	const renderCastCard = ({ name, character, gender, profile_path }, index) => {
		return (
			<CastCard
				name={name}
				character={character}
				gender={gender}
				profile_path={profile_path}
				key={`cast-${index}`}
			/>
		);
	};

	return (
		<ScrollerWrap>
			<ScrollContent>{cast.map(renderCastCard)}</ScrollContent>
		</ScrollerWrap>
	);
};

export default Scroller;
