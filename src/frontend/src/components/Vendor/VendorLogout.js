function Logout() {
    localStorage.removeItem('vendor_login');
    localStorage.removeItem('vendor_username');
    window.location.href='/';
}

export default Logout;