function getAction(role) {
    var isAdmin = function (role) { return role === 'admin' || role === 'superadmin'; };
    var isEditor = function (role) { return role === 'editor' || role === 'contributor'; };
    var isViewer = function (role) { return role === 'viewer' || role === 'guest'; };
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
