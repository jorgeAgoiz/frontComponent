import { ReactElement } from "react";
import { Data } from "../../types/types"
import UserRate from '../UserRate/index';

interface Props {
    data?: Data
}

const ListReviews = ({ data }: Props): any => {
    const reviews = data!.reviews
    return reviews!.map((elem, index) => {
        return (
            <UserRate
                key={index}
                user={elem}
            />
        )
    })
}

export default ListReviews