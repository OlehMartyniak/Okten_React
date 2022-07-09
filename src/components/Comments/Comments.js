import React from 'react';
import {useForm} from "react-hook-form";
import {createComment} from "../../services";

const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()

    const addComment = (post)=> {
        createComment(post).then(({data}) => console.log(data))
    }

    return (
        <div>

            <form onSubmit={handleSubmit(addComment)}>
                <h4>Create Comment</h4>
                <input type="text" placeholder={'name'} {...register('name', {required: true})}/>
                <input type="text" placeholder={'text'} {...register('body', {required: true})}/>
                <input type="text" placeholder={'email'} {...register('email', {required: true})}/>
                <button>submit</button>

                {errors.name && <p>name is required</p>}
                {errors.body && <p>text is required</p>}
                {errors.email && <p>email is required</p>}
            </form>

        </div>
    );
};

export {Comments};