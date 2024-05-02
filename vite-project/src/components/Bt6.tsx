
let user = {
    firstName: "Nguyen",
    lastName: "Huy",
}

let formatUser = (user: any) => {
    return (
        <div>
            {user.firstName} {user.lastName}
        </div>
    )
}

let Bt6 = () => {
    return <>
    <h1>bt6</h1>
    {formatUser(user)}
    </>;
}

export default Bt6;
