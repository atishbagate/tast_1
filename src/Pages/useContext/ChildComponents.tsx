import {  useUserContext } from "./context";

export function SideBar(){
    const user = useUserContext();
return (
    <div>
        <div>{(user?.isSubs === true) ? "True" : "False"} -- {user?.name}</div>
    </div>
)
}

export function Profile(){
    const user = useUserContext();
return <div className="profile">
    {user?.name}
</div>
}