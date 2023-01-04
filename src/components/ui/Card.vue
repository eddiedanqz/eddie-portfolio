<template>
					<div class="rounded-md mb-3">
						<div class="relative h-36 lg:h-60">
							<img v-if="project.img" :src="imageUrlFor(project.img)" 
							class="max-w-full bg-nav h-full object-center bg-center rounded-sm">
							<div class="w-full h-full absolute inset-0 hover:bg-black hover:bg-opacity-40">
								<p class="hidden hover:block text-white font-light text-sm">
								{{project.description}}
							</p>
							</div>
						</div>
						<div class="m-1 p-2">
							<div class="flex flex-row items-center justify-between">
								<h6 class="text-white font-semibold my-2">{{project.name}}</h6>
								<div class="space-x-1">
									<span class="text-white cursor-pointer" @click="gotoPage(project.link)">
										<i class="fas fa-globe"></i>
									</span>
									<span class="text-white text-sm">/</span>
									<span class="text-white cursor-pointer" @click="gotoPage(project.git)">
										<i class="fab fa-github"></i>
									</span>
								</div>
							</div>
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