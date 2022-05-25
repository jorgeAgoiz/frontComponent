import { useEffect, useState } from 'react';
import useRatings from '../../hooks/useRatings';
import ErrorMsg from '../ErrorMsg';
import ListReviews from '../ListReviews';
import LoadingMsg from '../LoadingMsg';
import RecallFalse from '../RecallFalse';
import RecallTrue from '../RecallTrue';
import UserRate from '../UserRate';
import "./styles.css"


const TableView = (): JSX.Element => {
    const { data, isError, isLoading } = useRatings()

    if (isLoading) {
        return <LoadingMsg />
    }

    if (isError) {
        return <ErrorMsg />
    }

    return (
        <>
            <table>
                <caption>Rate List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <ListReviews
                        data={data}
                    />
                </tbody>
            </table>
            {
                data?.recall ?
                    <RecallTrue /> :
                    <RecallFalse />
            }
        </>
    )
}

export default TableView