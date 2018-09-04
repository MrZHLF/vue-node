import axios from 'axios'
import store from '../store'


//请求拦截  设置统一的header
axios.interceptors.request.use(config => {
	store.dispatch("setLoading", true);   //改变loading状态
	if (localStorage.jwtToken) {
		config.headers.Authorization = localStorage.jwtToken;
	}
	return config;
},error =>{
	return Promise.reject(error)
});

//响应拦截 
axios.interceptors.response.use(response => {
	store.dispatch("setLoading", false);   //改变loading状态
	return response;
},error => {
	store.dispatch("setLoading", false);   //改变loading状态
	return Promise.reject(error)
});



export default axios;