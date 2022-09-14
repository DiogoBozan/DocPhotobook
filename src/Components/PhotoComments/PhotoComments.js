import React, { useContext, useState } from 'react'
import { UserContext } from "../../Context/UserContext"
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm'
import styles from "./PhotoComments.module.css"

const PhotoComments = (props) => {
    const [comments, setComments] = useState(() => props.comments)
    const { login } = useContext(UserContext)

    return (
        <>
            <ul className={styles.comments}>
                {comments.map(comment => <li key={comment.comment.ID}></li>)}
                <b>{comments.comment_author} : </b>
                <span>{comments.comment_content}</span>
            </ul>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments