
export const ComListRoute = {
    path: '/com-list',
    name: 'com-list',
    component: () => import('@/views/com/ComList'),
    meta: {
      public: false,
      onlyWhenLoggedOut: false,
      title: 'List '
    }
  };

  export const ComUploadRoute = {
    path: '/com-upload',
    name: 'com-upload',
    component: () => import('@/views/com/ComUpload'),
    meta: {
      public: false,
      onlyWhenLoggedOut: false,
      title: 'Upload '
    }
  };

  export const ComVerifyRoute = {
    path: '/',
    name: 'home',
    component: () => import('@/views/com/ComVerify'),
    meta: {
      public: true,
      onlyWhenLoggedOut: false,
      title: 'Home '
    }
  };

  export const VerifyRoute = {
    path: '/verify',
    name: 'verify',
    component: () => import('@/views/com/Verify'),
    meta: {
      public: true,
      onlyWhenLoggedOut: false,
      title: 'Verification '
    }
  };