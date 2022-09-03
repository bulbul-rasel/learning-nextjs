import React from 'react';
import User from '../components/User'

const Users = ({users}) => {
    console.log(users)
    return (
        <>
        <h1>List of users</h1>
        {
            users.map((user)=>{
                return (
                    <div key={user.id}>
                        <User user = {user} />
                    </div>
                )
            })
        }
        </>
    );
};

export default Users;

export async function getStaticProps(){
const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json();
console.log(data);

return{
    props:{
        users: data,
    },
}
}