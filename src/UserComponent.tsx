import { Button } from "antd"
import axios from "axios"
import { useEffect, useState } from "react";
import { User } from "./AjaxCaller";
import { UserForm } from "./UserForm";

export const UserComponent: React.FunctionComponent<{
    readonly user: User;
    readonly fetchData: () => any;
}> = (props) => {
    const { user, fetchData } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [isEditVisible, setIsEditVisible] = useState(false);

    useEffect(() => {
        console.log("UserComponent per utente: ", user.id);
    }, []);

    return <div>
        <img src={user.avatar} alt="avatar" />{user.first_name} {user.last_name}
        <Button loading={isLoading} disabled={isLoading} onClick={async () => {
            try {
                setIsLoading(true);
                await axios.delete("https://reqres.in/api/user/" + user.id + "?delay=1");
                fetchData();
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        }}>Elimina</Button>
        <Button onClick={() => {
            setIsEditVisible(true);
        }}>Modifica</Button>
        {isEditVisible && <UserForm fetchData={fetchData} user={user} />}
    </div>
}