function Logout() {
    localStorage.removeItem('admin_login');
    localStorage.removeItem('admin_username');
    window.location.href='/admin-page/';
}

export default Logout;