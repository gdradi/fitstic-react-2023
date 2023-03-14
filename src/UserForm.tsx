import { Button, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./AjaxCaller";

export const UserForm: React.FunctionComponent<{
    readonly user?: User;
    readonly fetchData: () => any;
}> = (props) => {
    const { fetchData, user } = props
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Questo hook esegue la nostra funzione ogni volta che almeno una
    // delle variabili indicate nell'array in fondo cambia.
    useEffect(() => {
        if (user != null) {
            setFirstName(user.first_name);
            setLastName(user.last_name);
        } else {
            setFirstName("");
            setLastName("");
        }
    }, [user]);

    return <div>
        <div><Input placeholder="Nome" value={firstName} onChange={event => {
            setFirstName(event.target.value);
        }} /></div>
        <div><Input placeholder="Cognome" value={lastName} onChange={event => {
            setLastName(event.target.value);
        }} /></div>
        <Button onClick={async () => {
            try {
                if (user == null) {
                    const response = await axios.post('https://reqres.in/api/users?delay=1', {
                        firstName: firstName,
                        lastName: lastName,
                    });
                } else {
                    const response = await axios.put('https://reqres.in/api/user/' + user.id + '?delay=1', {
                        firstName: firstName,
                        lastName: lastName,
                    });
                }
                setFirstName("");
                setLastName("");
                fetchData();
            } catch (error) {
                console.error(error);
            } finally {
            }
        }}>{user == null ? "Crea" : "Modifica"}</Button>
    </div>;
}