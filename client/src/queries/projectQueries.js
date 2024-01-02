import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
    query getProjects {
        projects {
            id
            name
            description
            status
            client {
                id
                name
                email
                phone
            }
        }
    }
`;

export { GET_PROJECTS };