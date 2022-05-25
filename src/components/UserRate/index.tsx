import { User } from '../../types/types';

interface Props {
    user: User
}

const UserRate = ({ user }: Props): JSX.Element => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.rate}</td>
        </tr>
    )
}

export default UserRate