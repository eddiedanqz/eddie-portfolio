<template>
	<div class="rounded-md mb-3">
		<div class="relative h-36 lg:h-60">
			<img v-if="project.img" :src="imageUrlFor(project.img)" 
			class="max-w-full bg-nav h-full object-center bg-center rounded-sm" @mouseover="hover()" @mouseleave="hideHover()"/>
			<div class="flex justify-end items-center w-full h-full absolute inset-0 bg-black bg-opacity-80" v-if="isVisible">
				<div class="flex-row">
				<p class="text-white font-light text-base p-2">
				{{project.description}}
			     </p>
				<p class="text-white font-light text-base p-2">
				<strong>Built with:</strong> {{project.skills}}
			     </p>
				</div>
			</div>
		</div>
		<div class="m-1 p-2">
			<div class="flex flex-row items-center justify-between">
				<h6 class="text-white font-semibold my-2">{{project.name}}</h6>
				<div class="space-x-1">
					<span class="text-white cursor-pointer text-sm" @click="gotoPage(project.link)">
						<i class="fas fa-link"></i>
					</span>
					<span class="text-white text-sm">/</span>
					<span class="text-white cursor-pointer text-sm" @click="gotoPage(project.git)">
						<i class="fab fa-github"></i>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {imageUrlFor} from '../../client'


export default {
	name:'Card',
 props:['project'],
  data(){
    return{
      projects:[],
	  isVisible:false
    }
  },
 methods:{
	imageUrlFor,
	hover(){
    this.isVisible = true
	},
	hideHover(){
    this.isVisible = false
	},
	 gotoPage(link) {
      let route = link;
      window.open(route);
    },
 }
}

</script>