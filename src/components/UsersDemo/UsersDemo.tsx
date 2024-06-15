type UsersDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[]
}
const UsersDemo = ({ users }: UsersDemoProps) => {
    return (
        <div>
            {
                users.map((user) => {
                    const { id, name, email, age } = user;
                    return (
                        <div key={id}>
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UsersDemo
