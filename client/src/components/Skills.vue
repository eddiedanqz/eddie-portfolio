<template>
  	<!-- My work -->
		<div class="container mt-20 mx-auto px-8  md:py-4 md:px-14 lg:px-24 md:w-11/12">
			<section class="w-full">
				<h2 id="skills" class="secondary-title text-left">My Skills</h2>
				<div class="grid grid-cols-1 mt-6 p-3 md:grid-cols-2 lg:grid-cols-5">
					<!--card 1-->
                <div class="bg-body h-40 w-40 shadow-xl justify-self-center mx-1 my-3" v-for="skill in skills" :key="skill.id">
                <div class="w-ull h-full flex flex-col  p-6 shadow-xl">
                    <div class="m-2">
				      <img v-if="skill.img" :src="imageUrlFor(skill.img)"  class="w-full h-full">
                    </div>
                 <p class="text-xs font-semibold text-center">{{ skill.name }}</p>
                </div>
                </div>
					<!--card 1-->
	         </div>
			</section>
		</div>
</template>

<script>
import {client,imageUrlFor} from '../client';

export default {
  name: "Skills",
   data(){
    return{
      skills:[]
    }
  },
  methods: {
    imageUrlFor,
	fetchData(){
 let QUERY = '*[_type == "skill"]';
    client.fetch(QUERY).then((skills) => {
		this.skills = skills
		// console.log(skills)
	})
	},
  },
   created() {
    this.fetchData();
  }
};

</script>