import {FC} from 'react';
import React from 'react';
import {selectUserInfo} from "src/store/userSlice";
import {useAppSelector} from "src/hooks";

const Profile: FC = () => {
    const user = useAppSelector(selectUserInfo);

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <p>ID: {user?.id}</p>
                {user?.name && <p>Имя: {user?.name}</p>}
                <p>Email: {user?.email}</p>
                <p>Дата регистрации: {new Date(user?.signUpDate).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Profile;
