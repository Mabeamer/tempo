import React from 'react';

function Buildteam(props){
	const teamList = props.teamArray.map(function(object,i){
		return(
				<li className="player" key={i}>{object.name}</li>
			);
	})
	return(
		<ul className="team" id={props.teamID}>
			{teamList}
		</ul>
		);
}
export default Buildteam;