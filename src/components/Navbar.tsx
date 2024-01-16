import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            location.reload();
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-[#FFE1A8] p-6'>
            <div className='flex items-center flex-shrink-0 text-[#723D46] hover:text-[#E26D5C] mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>
                    Library App
                </Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 
                    text-[#723D46] border rounded border-[#723D46] hover:text-[#723D46] 
                    hover:border-[#E26D5C]'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <button className='p-3 m-5 bg-[#C9CBA3] justify-center'>
                        <div>
                            <Link to='/' onClick={clicked} className='flex place-itmes-center mt-4 
                                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#E26D5C] 
                               '>
                                    Home
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-[#C9CBA3] justify-center'>
                        <div>
                            <Link to='/dashboard' onClick={clicked} className='flex place-itmes-center mt-4 
                                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#E26D5C] 
                               '>
                                    Dashboard
                            </Link>
                        </div>
                    </button>
                    {
                        !auth.currentUser ?
                        <button className='p-3 m-5 bg-[#C9CBA3] justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick()}} className='flex place-items-center mt-4
                                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#E26D5C]'>
                                    Login
                                </Link>
                            </div>
                        </button>
                        :
                        <button className="p-3 m-5 bg-[#C9CBA3] justify-center">
                            <div>
                                <Link to='/' onClick={ () => {signOutOnClick()}} className='flex place-items-center mt-4
                                lg:inline-block lg:mt-0 text-[#723D46] hover:text-[#E26D5C]'>
                                    Logout
                                </Link>
                            </div>
                        </button>
                    }
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar