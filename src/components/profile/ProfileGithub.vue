<template>
	<div>
		<hr>
		<h3 class="mb-4">Github仓库地址信息</h3>
		<div class="card card-body mb-2" v-for="repo in repos" :key="repo.id">
			<div class="row">
				<div class="col-md-6">
					<h4>
						<a :href="repo.html_url" class="text-info" target="_blank">{{repo.name}}</a>
					</h4>
					<p>{{repo.description}}</p>
				</div>
				<div class="col-md-6">
					<span class="badge badge-info mr-1">
						Stars: {{repo.stargazers_count}}
					</span>
					<span class="badge badge-secondary mr-1">
						Watchers: {{repo.watchers_count}}
					</span>
					<span class="badge badge-success">
						Forks: {{repo.forks_count}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'profileGithub',
  data () {
    return {
      client_id:"e102be01b35239f2fa99",  //github id
			client_secret:'865f74a4150f55d220999a8bbaca6b64b291e59b',
			count: 5,  //数量 0代表显示所有 1就是代表显示一个
			sort: 'created: desc', //升序
			repos:[]  //存放获取的数据
    }
  },
	created(){
		//请求github
		fetch(
      `https://api.github.com/users/${this.username}/repos?per_page=${this.count }&sort=${this.sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    ).then(res =>  res.json()).then(data => {
			// console.log(data)
			this.repos = data
		}).catch(err => {
			console.log(err)
		})
	},
	props:{	
		username:String
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
