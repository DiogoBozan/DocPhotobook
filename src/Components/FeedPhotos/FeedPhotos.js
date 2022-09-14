import React, { useEffect } from 'react';
import { PHOTOS_GET } from '../../Api';
import useFetch from "../../Hooks/useFetch"
import FeedPhotoItem from "../FeedPhotosItem/FeedPhotosItem"
import Error from "../Error/Error"
import Loading from '../Loading/Loading';
import styles from "./FeedPhotos.module.css"


const FeedPhotos = ({ setModalPhoto }) => {

    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            const { response, json } = await request(url, options)
            console.log(json)
        }
        fetchPhotos();
    }, [request])

    if (error) return <Error error={error} />
    if (loading) return <Loading />

    if (data)
        return (
            <ul className={`${styles.feed} animaLeft`}>
                {data.map(photo => (
                    <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                ))}
            </ul>
        );
    else return null
}

export default FeedPhotos