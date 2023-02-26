import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setLoginState} from '../Slicer/slicer';
import { setMembername } from '../Slicer/slicer';

const MemberLogin = () => {

    const loginState = useSelector((state) => state.loginState);
    const dispatch = useDispatch();

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    // Authentication is not happeing here, we are only fetching the response of authentication
    // if verified in backend, loginState will change in redux store
    const handelMemberLogin = async (e) => {
        e.preventDefault();
        const isVerifed = await fetch(`/api/member/login/${username}/${password}`)
        const response = await isVerifed.json();
        if(response === 'verified' ){
            dispatch(setLoginState());
            dispatch(setMembername(username));
        } else {
            alert('Wrong Credientials')
        }
    }


    return (
        <div className='w-[40%] display-block m-auto bg-slate-100 mt-4 p-10'>
            <form>

                <div className='flex flex-col' >
                    <label className='text-xl font-medium' >
                        User-Name
                    </label>

                    <input type='text' name='username' value={username} onChange={ (e) => setUsername(e.target.value) }
                    className='border-2 p-2 mt-4 w-[50%]' />
                </div>

                <div className='flex flex-col mt-8' >
                    <label className='text-xl font-medium' >
                        Password
                    </label>

                    <input type='password' name='password' value={password} onChange={ (e) => setPassword(e.target.value) }
                    className='border-2 p-2 mt-4 w-[50%]' />
                </div>

                <button type='submit' className='border-2 bg-slate-200 mt-8 py-1 px-6
                    hover:bg-slate-100' onClick={handelMemberLogin}>  
                    Login
                </button>

            </form>

            <div>
                {
                    loginState && (
                        <p className='text-lg text-slate-600 mt-4 font-medium' >
                            Logged In Succesfully , You Can Add and Search Patients Now
                        </p>
                    )
                }
            </div>

        </div>
    )
}

export default MemberLogin