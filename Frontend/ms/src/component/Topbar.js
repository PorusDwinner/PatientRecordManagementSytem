import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setLoginState } from "../Slicer/slicer";

const Topbar = () => {

    const loginState = useSelector((state) => state.loginState);
    const memberName = useSelector((state) => state.memberName);
    const dispatch = useDispatch();

    return (
        <div className=" flex justify-around text-slate-800 bg-slate-100 h-[4.5rem] w-[98%] display-block m-auto " >
            <div>
                <h1 className="text-4xl font-medium leading-[4.5rem] text-slate-600 font-serif font-medium">
                    Patient Record Management System
                </h1>
            </div>

            <div>
                <ul className="flex" >
                    <li>
                        <Link to='/' className="font-medium border-2 p-2 leading-[4.5rem]
                         hover:bg-slate-200">
                            New Patient
                        </Link>
                    </li>

                    <li>
                        <Link to='/doctors-details' className="font-medium border-2 p-2 ml-8 leading-[4.5rem]
                         hover:bg-slate-200">
                            Doctors
                        </Link>
                    </li>

                    <li>
                        { !loginState ? (
                            <Link to='/memberLogin' className="font-medium border-2 p-2 ml-8 leading-[4.5rem]
                                hover:bg-slate-200">
                                Member Login
                            </Link> ) : (
                            <Link className="font-medium border-2 p-2 ml-8 leading-[4.5rem]
                            hover:bg-slate-200" onClick={() => {dispatch(setLoginState())}}>
                                user : {memberName}
                            </Link>    
                            )
                        }           
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Topbar