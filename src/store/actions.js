import { signInWithPopup } from "firebase/auth"
import db, { auth, provider } from "../firebase";
import { userActions } from "./user";
import { storage, ref } from "../firebase";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { articlesActions } from "./articles";

export const signIn = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                dispatch(userActions.setUser(result.user))
                localStorage.setItem('user', JSON.stringify(result.user))
            }).catch((error) => {
                console.log(error.message)
            });
    }
}

export const signOut = () => {
    return (dispatch) => {
        auth.signOut()
            .then(() => {
                localStorage.removeItem('user')
                dispatch(userActions.setUser(null))
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}

export const postArticleAPI = (payload) => {
    return (dispatch) => {
        dispatch(articlesActions.setLoadingStatus(true))
        if (payload.image != '') {
            const storageref = ref(storage, `images/${payload.image.name}`)
            const uploadTask = uploadBytesResumable(storageref, payload.image);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => console.log(error.code),
            async () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    try {
                        addDoc(collection(db, "articles"), {
                            actor: {
                                description: payload.user.email,
                                title: payload.user.displayName,
                                date: payload.timestamp,
                                image: payload.user.photoURL,
                            },
                            video: payload.video,
                            sharedimg: downloadURL,
                            comments: 0,
                            description: payload.description,
                        })
                    } catch(e) {
                        console.error("Error adding document: ", e);
                    }
                });
                dispatch(articlesActions.setLoadingStatus(false))
            })
        } else if(payload.video) {
            addDoc(collection(db, "articles"), {
                actor: {
                    description: payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL,
                },
                video: payload.video,
                sharedimg: '',
                comments: 0,
                description: payload.description,
            })
            dispatch(articlesActions.setLoadingStatus(false))
        } 
    }
}

export const getArticleAPI = () => {
    return (dispatch) => {
        let payload
        const q = query(collection(db, "articles"), orderBy("actor.date", "desc"));
        onSnapshot(q, (querySnapshot) => {
            payload = querySnapshot.docs.map((doc) => doc.data())
            dispatch(articlesActions.getArticles(payload))
        });
    }
}