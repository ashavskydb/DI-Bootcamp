function getAction(role: string): string {
   
    const isAdmin = (role: string) => role === 'admin' || role === 'superadmin';
    const isEditor = (role: string) => role === 'editor' || role === 'contributor';
    const isViewer = (role: string) => role === 'viewer' || role === 'guest';
  
    switch (true) {
      case isAdmin(role):
        return 'Access to all features';
      case isEditor(role):
        return 'Edit content';
      case isViewer(role):
        return 'View content';
      default:
        return 'No access';
    }
  }
  
  console.log(getAction('admin'));       
  console.log(getAction('editor'));     
  console.log(getAction('guest'));      
  console.log(getAction('noname'));   
  