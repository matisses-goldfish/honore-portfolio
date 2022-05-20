import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user ($userName: String!) {
    user(userName: $userName){
        _id 
        userName
        email
        password
        projects {
            _id
            title
            authors
            description
            techUsed
            dateCreated
            github
            depolyedLink
        }
    }
}
`;

export const QUERY_PROJECTS = gql`
query projects {
    projets {
        _id 
        title
        authors
        description
        techUsed
        dateCreated
        github
        depolyedLink
    }
}
`;

export const QUERY_PROJECTS = gql`
query project($projectId: String!){
    project(_id: $projectId) {
        _id 
        title
        authors
        description
        techUsed
        dateCreated
        github
        depolyedLink
    }
}
`;