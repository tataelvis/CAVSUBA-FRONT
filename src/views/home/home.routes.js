
export const Home = {
  path: '/login2',
  name: 'login',
  component: () => import('@/views/auth/Login'),
  meta: {
    public: true,
    onlyWhenLoggedOut: false,
    title: 'Login '
  }
}

export const HomeUser = {
  path: '/trasht',
  name: 'home-user',
  component: () => import('@/views/home/Home'),
  meta: {
    public: false,
    onlyWhenLoggedOut: false,
    title: 'Acceuil '
  }
}
