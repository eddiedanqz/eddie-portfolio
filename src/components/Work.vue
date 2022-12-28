<script setup>
import Card from './ui/Card.vue'

</script>
<template>
  	<!-- My work -->
		<div class="container mt-24 flex justify-center items-center mx-auto px-8 md:px-14 lg:px-28 w-full">
			<section class="w-full">
				<h2 id="work" class="secondary-title">My work</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
					<!--card 1-->
				<Card/>
					<!--card 4-->
				<Card/>
					<!--card 3-->
				<Card/>
	    </div>
			</section>
		</div>


</template>
