import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import googleIcon from '../assets/svg/googleIcon.svg';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const OAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();

    //When we click on the google icon
    const onGoogleClick = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            //Check weather a user exist or not
            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            //If user does not exist create the user
            if (!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                });
            };
            navigate('/');
        } catch (error) {
            toast.error('Could not authorize with google');
        }
    }
    return (
        <div className="socialLogin">
            <p>Sign {location.pathname === '/sign-in' ? 'in' : 'up'} with</p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt='Google' />
            </button>
        </div>
    )
}

export default OAuth;