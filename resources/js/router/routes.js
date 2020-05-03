export default [
    ...applyRules(['guest'], [
        {
            path: '', component: require('$comp/auth/AuthWrapper').default, redirect: {name: 'login'}, children:
                [
                    {path: '/login', name: 'login', component: require('$comp/auth/login/Login').default},
                ]
        },
    ]),
    ...applyRules(['auth'], [
        {
            path: '', component: require('$comp/admin/MainWrapper').default, children:
                [
                    { path: '', name: 'index', redirect: {name: 'dashboard'} },
                    {
                        path: 'profile', component: require('$comp/admin/profile/ProfileWrapper').default, children:
                            [
                                { path: '', name: 'profile', component: require('$comp/admin/profile/Profile').default },
                                { path: 'edit', name: 'profile-edit', component: require('$comp/admin/profile/edit/ProfileEdit').default }
                            ]
                    },

                    { path: 'dashboard', name: 'dashboard', component: require('$comp/admin/dashboard/Dashboard').default },
                ]
        },
    ]),
    {path: '*', redirect: {name: 'index'}}
]

function applyRules(rules, routes) {
    for (let i in routes) {
        routes[i].meta = routes[i].meta || {}

        if (!routes[i].meta.rules) {
            routes[i].meta.rules = []
        }
        routes[i].meta.rules.unshift(...rules)

        if (routes[i].children) {
            routes[i].children = applyRules(rules, routes[i].children)
        }
    }
    return routes
}
