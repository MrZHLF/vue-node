import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard'
import CreateProfile from '@/components/CreateProfile'
import EditProfile from '@/components/EditProfile'
import AddExperience from '@/components/AddExperience'
import AddEducation from '@/components/AddEducation'
import Profiles from '@/components/Profiles'
Vue.use(Router)

export default new Router({
  routes: [
		{ path: '*',redirect: "/" },
		{ path: '/',component: Landing },
		{ path: '/login',component: Login },
		{ path: '/register',component: Register },
		{ path: '/dashboard',component: Dashboard },
		{ path: '/create-profile',component: CreateProfile },
		{ path: '/edit-profile',component: EditProfile },
		{ path: '/add-experience',component: AddExperience },
		{ path: '/add-education',component: AddEducation },
		{ path: '/profiles',component: Profiles }
  ],
	linkActiveClass: 'active', //当前路由激活状态
	mode:"history"
})
