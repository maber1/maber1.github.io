import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {StoreDispatch} from "src/store";
import React from 'react';
import {selectUserInfo} from "src/store/userSlice";

const Profile = () => {
    const dispatch: StoreDispatch = useDispatch();
    const user = useSelector(selectUserInfo);

    useEffect(() => {

        // dispatch(setLoading(true));
        // setTimeout(() => {
        //     const fakeUser = { name: 'John Doe', email: 'john@example.com' };
        //     dispatch(setUser(fakeUser));
        //     dispatch(setLoading(false));
        // }, 1000);
    }, [dispatch]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>Error: {error}</div>;
    // }

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;

/*
import React from 'react';
import {RegisterForm} from "src/components/Forms";

const Profile = () => {
    return (
        <div>
            <RegisterForm />
        </div>
    );
};

export default Profile;*/
