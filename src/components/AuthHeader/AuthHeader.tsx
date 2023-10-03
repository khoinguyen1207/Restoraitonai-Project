import { Link, useLocation } from 'react-router-dom'
import logo from 'src/assets/logo-color.png'
import { ROUTES } from 'src/constants/routes'

export default function AuthHeader() {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <div className=' py-3 px-4 text-base'>
            <div
                className={
                    pathname === '/forgot' ? 'flex justify-center items-center' : 'flex items-center justify-between'
                }
            >
                <div className='h-10 w-[150px]'>
                    <img src={logo} alt='logo' className='w-full h-full' />
                </div>
                {pathname !== '/forgot' && (
                    <div>
                        <span className='text-gray-500'>
                            {pathname === '/login' ? 'New to Roof Calculation?' : 'Already have an account?'}
                        </span>
                        <Link
                            to={pathname === '/login' ? ROUTES.REGISTER : ROUTES.LOGIN}
                            className='ml-2 cursor-pointer font-semibold text-[#1782c5] hover:underline hover:text-[#1782c5]'
                        >
                            {pathname === '/login' ? 'Create an Account' : 'Sign in'}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
