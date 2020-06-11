export const SignUpRoute = {
  path: '/register',
  name: 'register',
  component: () => import('@/views/auth/Register'),
  meta: {
    public: true,
    onlyWhenLoggedOut: true,
    title: 'Inscription'
  }
}

export const LoginRoute = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/auth/Login'),
  meta: {
    public: true,
    onlyWhenLoggedOut: true,
    title: 'Connexion'
  }
}
