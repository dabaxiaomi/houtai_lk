const Home = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/home')
const Error = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/error')
const ShopAdd = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/shop_add')
const Shop = () =>
    import ( /* webpackChunkName: "group-foo" */ '../views/shop')

export default [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/shop_add',
        component: ShopAdd
    },

    {
        path: '*',
        component: Error
    }

]