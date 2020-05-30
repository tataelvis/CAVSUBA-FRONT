export const CreatePartyRoute = {
  path: '/parties/add',
  name: 'create-parties',
  component: () => import('@/views/parties/CreateParty'),
  meta: {
    public: false,
    onlyWhenLoggedOut: false,
    title: 'Créer un parti politique'
  }
}

export const EditPartyRoute = {
  path: '/parties/edit/:id',
  name: 'edit-party',
  component: () => import('@/views/parties/EditParty'),
  meta: {
    public: false,
    onlyWhenLoggedOut: false,
    title: 'Modifier un parti politique'
  }
}

export const ValidatePartyRoute = {
  path: '/parties/validation',
  name: 'validate-parties',
  component: () => import('@/views/parties/ValidateParty'),
  meta: {
    public: false,
    onlyWhenLoggedOut: false,
    title: 'Validation'
  }
}
