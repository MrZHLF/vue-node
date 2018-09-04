export const setIsAuthenticated = ({commit},data) => {
	commit('setIsAuthenticated',data)
}

export const setUser = ({commit},data) => {
	commit('setUser',data)
}

export const setProfile = ({commit},data) => {
	commit('setProfile',data)  //用户信息
}

export const clearCurrentState = ({commit},data) => {
	commit('setProfile',null);  //清空用户信息
	commit('setUser',null)
	commit('setIsAuthenticated',false)
}


export const setLoading = ({commit},data) => {
	commit('setLoading',data)  //用户信息
}

export const setProfiles = ({commit},data) => {
	commit('setProfiles',data)  //所有用户
}