//string, number , boolean, void,null
//user defined types -> object,array,enum,union,any,custom type

type userProps = { name: string; age: number; isRegistered: boolean; lang: string[] };



//{name,age}
const User = (props: userProps) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age} years old</p>
            {props.isRegistered ? <p>Registered User</p> : <p>Not Registered user</p>}
            <p>
                Speaks:
                {props.lang.map((language, index) => {
                    return <span key={index}>{language} </span>
                })}
            </p>
        </div>
    )
}

export default User
