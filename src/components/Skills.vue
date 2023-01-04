<template>
  	<!-- My work -->
		<div class="container mt-20 mx-auto px-8  md:py-4 md:px-14 lg:px-24 md:w-11/12">
			<section class="w-full">
				<h2 id="skills" class="secondary-title text-left">My Skills</h2>
				<div class="grid grid-cols-1 mt-6 p-3  md:grid-cols-2 lg:grid-cols-5">
					<!--card 1-->
                <div class="bg-body h-40 w-40 shadow-2xl mx-1 my-3" v-for="skill in skills" :key="skill.id">
                <div class="w-ull h-full flex flex-col items-center justify-center p-6 shadow-2xl">
                    <div class="m-2">
				      <img v-if="skill.img" :src="imageUrlFor(skill.img)"  class="w-full h-full">
                    </div>
                 <p class="text-sm font-semibold">{{ skill.name }}</p>
                </div>
                </div>
					<!--card 1-->
	         </div>
			</section>
		</div>
</template>

<script>
import sanity from '../client';
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity);

export default {
  name: "Skills",
   data(){
    return{
      skills:[]
    }
  },
  methods: {
	fetchData(){
 let QUERY = '*[_type == "skill"]';
    sanity.fetch(QUERY).then((skills) => {
		this.skills = skills
		// console.log(skills)
	})
	},
    imageUrlFor(source){
		return imageBuilder.image(source)
	}
  },
   created() {
    this.fetchData();
  }
};

</script>