export const setIsAuthenticated =(state,data) => {
	state.isAuthenticated = data;  //是否授权
}

export const setUser= (state,data) => {
	state.user = data; //用户状态改变
}


export const setProfile= (state,data) => {
	state.profile = data; //存储用户状态改变
}


export const setLoading= (state,data) => {
	state.loading = data; //加载动画
}

export const setProfiles= (state,data) => {
	state.profiles = data; //所有用户
}