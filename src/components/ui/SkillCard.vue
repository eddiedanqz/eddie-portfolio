<template>
					<div class="bg-white rounded-md mb-3 p-2">
						<div class="relative h-36 lg:h-52">
							<img v-if="project.img" :src="imageUrlFor(project.img)" 
							class="max-w-full bg-nav h-full object-center bg-center rounded-t-md">
						</div>
						<div class="m-1 p-2">
							<div class="flex flex-row items-center justify-between">
								<h6 class="text-gray-900 font-semibold my-2">{{project.name}}</h6>
								<div class="space-x-1">
									<span class="text-gray-600 cursor-pointer" @click="gotoPage(project.link)">
										<i class="fas fa-globe"></i>
									</span>
									<span class="text-gray-600 text-sm">/</span>
									<span class="text-gray-600 cursor-pointer" @click="gotoPage(project.git)">
										<i class="fab fa-github"></i>
									</span>
								</div>
							</div>
							<p class="text-gray-700 font-light text-sm">
								{{project.description}}
							</p>
						</div>
					</div>
</template>
<script>
import sanity from '../../client'
import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanity);

export default {
	name:'Card',
 props:['project'],
 methods:{
	imageUrlFor(source){
		return imageBuilder.image(source)
	},
	 gotoPage(link) {
      let route = link;
      window.open(route);
    },
 }
}

</script>