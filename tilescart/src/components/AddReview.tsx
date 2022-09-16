import { useMutation } from '@apollo/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ADD_REVIEW } from '../service/AddReviewService';
import NavBar from './NavBar'

export default function AddReview() {
    const navigate = useNavigate();
    let input: {
        locationReview: {
            comment: string | undefined,
            rating: number | undefined,
            locationId: string | undefined
        }
    } = {
        "locationReview": {
            "comment": "None",
            "rating": 0,
            "locationId": "loc-1"
        }
    }
    
    const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);

    if (loading) return <>
        <NavBar activate="addReview"/>
        <p>Submitting...</p>
    </>
    if (error) return <>
        <NavBar activate="addReview"/>
        <p>Submission error! {error.message}</p>
    </>
    
    return (
        <>
            <NavBar activate="addReview"/>
            
            <div className="container d-flex justify-content-center align-items-center">
                <form className="form-inline m-5" onSubmit={(e) => {
                    e.preventDefault();
                    console.log(input);
                    addReview({variables: input}).then((data) => alert(`${data.data.submitReview.code}, ${data.data.submitReview.success}, ${data.data.submitReview.message}, ${data.data.submitReview.locationReview.id}, ${data.data.submitReview.locationReview.comment}`));
                    input = {
                        "locationReview": {
                            "comment": "None",
                            "rating": 0,
                            "locationId": "loc-1"
                        }
                    }
                }}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Comment" ref={(node) => { input.locationReview.comment = node?.value;}}/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="number" className="form-control" placeholder="Rating" min={0} max={5} ref={(node) => { input.locationReview.rating = Number(node?.value);}}/>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" className="form-control" placeholder="Location Id"  ref={(node) => { input.locationReview.locationId = node?.value;}}/>
                    </div>
                    <input type='submit' className="btn btn-primary" title='Submit'/>
                </form>
            </div>
        </>
    )
}
