type userProps = {
    user: {
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    }
}
const ObjectUser = ({ user }: userProps) => {
    const { name, age, isRegistered, lang } = user;
    return (
        <div style={{ border: "1px solid", margin: "0.5rem" }}>
            <h2>{name}</h2>
            <p>{age} years old</p>
            {isRegistered ? <p>Registered User</p> : <p>Not Registered user</p>}
            <p>
                Speaks:
                {lang.map((language, index) => {
                    return <span key={index}>{language} </span>
                })}
            </p>
        </div>
    )
}

export default ObjectUser
