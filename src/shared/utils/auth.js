export const isLoggedIn = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
        return true;
    }
    return false;
};
