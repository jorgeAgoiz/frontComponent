import { Data } from "../types/types"

export const getRatings = (): Promise<Data> => {
    return fetch("http://localhost:3006/reviews")
                .then(result => result.json())
}