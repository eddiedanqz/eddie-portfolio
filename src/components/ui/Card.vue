<script>
export default {
  data() {
    return {
      post: {
        name: '',
        desc: '',
        link:'',
        git:''
      }
    }
  }
}

</script>
<template>
					<div class="bg-white rounded-md mb-3 w-11/12">
						<div class="relative h-36 lg:h-52">
							<img src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
							class="w-full bg-nav h-full object-cover rounded-t-md">
						</div>
						<div class="m-1 p-2">
							<div class="flex flex-row items-center justify-between">
								<h6 class="text-gray-900 font-semibold my-2">Project Name</h6>
								<div class="space-x-1">
									<span class="text-gray-600">visit</span>
									<span class="text-gray-600 text-sm">/</span><span class="text-gray-600">site</span>
								</div>
							</div>
							<p class="text-gray-700 font-light text-sm">
								I’ve had the pleasure of working with multiple Fortune 500 companies, 
								designing and implementing both frontend and backend.
							</p>
						</div>
					</div>
</template>
