const LINKS = {
  forgotPassword: 'https://myabundant.com/wp-login.php?action=lostpassword',
  helpCenter: 'https://help.myabundant.com/',
  supportPhone: '646-466-4473',
  abandonedForms: (token: string) => `https://myabundant.com/abandoned-forms/?token=${token}`,
  linkBuilder: (token: string) => `https://myabundant.com/linkbuilder?token=${token}`,
  documents: 'https://files.myabundant.com/',
  centrexContact: (centrexId: string) =>
    `https://crm.myabundant.com/index.php?module=contacts&page=view2&cid=${centrexId}`,
  centrexAdvance: (centrexId: string) =>
    `https://crm.myabundant.com/index.php?module=advances&page=new&id=${centrexId}`,
} as const

export { LINKS }
