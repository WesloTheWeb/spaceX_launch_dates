import React from 'react';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success }) => {
    console.log(props);
    return (
        <div className="card">
            <h4>Mission: {mission_name}</h4>
        </div>
    );
};

export default LaunchItem;