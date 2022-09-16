import { gql } from "@apollo/client";

export const ADD_REVIEW = gql`
    mutation Mutation($locationReview: LocationReviewInput) {
        submitReview(locationReview: $locationReview) {
        code
        success
        message
            locationReview {
                id
                comment
            }
        }
    }  
`