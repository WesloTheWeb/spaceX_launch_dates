import React from 'react';
import { Query, useQuery, ApolloConsumer, gql } from "@apollo/client"
import LaunchItem from '../LaunchItem/LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = (props) => {
    return (
        <>
            <h1 className="display-board">Launches</h1>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error);
                        console.log(data);

                        return (<>
                            {data.launches.map(launch => (
                                <LaunchItem key={launch.flight_number} launch={launch} />
                            ))}
                        </>)
                    }
                }

            </Query>
        </>
    );
};

export default Launches;