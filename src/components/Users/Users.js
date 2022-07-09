import React from 'react';
import {useForm} from "react-hook-form";
import {createUser} from "../../services";

const Users = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const addUser = (obj)=> {
        createUser(obj).then(({data}) => console.log(data))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(addUser)}>
                <h4>Create User</h4>
                <input type="text" placeholder={'name'} {...register('name', {required: true})}/>
                <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
                <input type="text" placeholder={'email'} {...register('email', {required: true})}/>
                <button>submit</button>

                {errors.name && <p>name is required</p>}
                {errors.username && <p>username is required</p>}
                {errors.email && <p>email is required</p>}
            </form>

        </div>
    );
};

export {Users};