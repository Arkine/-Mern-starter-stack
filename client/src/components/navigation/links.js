
export default {
    all:[
        {
            to: '/',
            label: 'Home',
        },
        {
            to: 'about',
            label: 'About',
        }
    ],
    loggedIn: [
        {
            to: '/logout',
            label: 'Log Out',
        },
        
    ],
    loggedOut: [
        {
            to: '/login',
            label: 'Log In'
        },
        {
            to: '/signup',
            label: 'Sign Up'
        }
    ]
}