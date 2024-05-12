function Logout() {
    localStorage.removeItem('vendor_login');
    localStorage.removeItem('vendor_username');
    window.location.href='/vendor/login';
}

export default Logout;