<template>
  	<!-- My work -->
		<div class="container mt-24 mx-auto px-8 md:px-14 lg:px-24 md:w-11/12">
			<section class="w-full">
				<h2 id="work" class="secondary-title">My work</h2>
				<div class="grid grid-cols-1 space-x-3 mt-6 md:grid-cols-2 lg:grid-cols-3">
					<!--card 1-->
				<Card  v-for="project in projects" :key="project.id" :project="project"/>
	         </div>
			</section>
		</div>
</template>

<script>
import {client} from '../client';
import Card from './ui/Card.vue'

export default {
  name: "Work",
   components: {
    Card
  },
   data(){
    return{
      projects:[]
    }
  },
  methods: {
	fetchData(){
 let QUERY = '*[_type == "project"]';
    client.fetch(QUERY).then((projects) => {
		this.projects = projects
		// console.log(projects)
	})
	}
  },
   created() {
    this.fetchData();
  }
};

</script>