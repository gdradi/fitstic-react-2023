import { Button } from "antd"
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


interface User {
    readonly avatar: string;
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
}


export const AjaxCaller: React.FunctionComponent = () => {

    const [usersList, setUsersList] = useState<User[]>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>(null);

    const fetchData = async () => {
        console.log("bottone premuto!");
        try {
            setIsLoading(true);
            setError(null);
            const response = await axios.get('https://reqres.in/api/users?delay=1');
            const payload = response.data; // Questo è tutto il payload che il server restituisce
            //const usersList: User[] = payload.data;
            setUsersList(payload.data);
        } catch (error) {
            setError(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        console.log("log dentro useEffect");
        fetchData();
    }, []);

    return <div>
        <h1>Ajax Caller</h1>

        { /* L'event handler va definito async
        perchè all'interno usiamo await */ }
        <Button onClick={fetchData} disabled={isLoading === true}>Esegui chiamata GET</Button>

        {/* <div>{JSON.stringify(usersList)}</div> */}
        {isLoading === true && <div><Spin indicator={<LoadingOutlined style={{ fontSize: 32 }} spin />} /></div>}
        {!_.isEmpty(error) && <div>{error}</div>}
        {_.map(usersList, (user, i) => <div key={i}>
            <img src={user.avatar} alt="avatar" />{user.first_name} {user.last_name}
        </div>)}
    </div>
}