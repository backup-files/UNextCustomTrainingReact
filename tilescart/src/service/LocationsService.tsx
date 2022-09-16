import { useQuery, gql } from '@apollo/client';
import TableCreator from '../tablec/tablec';

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return <TableCreator headers={["id", "name", "description", "photo"]} data={data.locations}/>
}
