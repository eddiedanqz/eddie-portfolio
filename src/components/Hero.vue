<template>
  
    <div class="container mt-3 flex justify-between items-center mx-auto px-8 md:px-12 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
            <nav class="hidden fixed left-percentage md:inline-block lg:mr-24 lg:w-4 xl:block">
                <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    <a href="#" class="nav-dot selected-circle block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0 z-50">Home</span>
                    </a>
                    <a href="#work" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                    </a>
                    <a href="#clients" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Clients</span>
                    </a>
                    <a href="#hire" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                    </a>
                </div>
            </nav>

            <div class="flex flex-wrap lg:mx-20 justify-center md:justify-center max-w-xl mt-0 md:max-w-md md:my-32">
                <h1 class="font-bold text-5xl md:text-4xl lg:text-6xl text-center md:text-left">Building <br> beautiful web experiences.</h1>
                <div class="w-full flex justify-center md:justify-start">
                    <button class="px-6 py-2.5 bg-theme text-white font-bold mt-10 flex items-center space-x-3 rounded-sm shadow-2xl">
                        <span>Download CV.</span>
                    </button>
                </div>
            </div>

		<div class="mx-auto h-56 w-56 rounded-full mt-12 bg-center bg-cover border-2 border-white md:border-0 md:rounded-none md:w-full md:h-full md:-z-1">
            <img src="../assets/img/man.png" alt="Man" class="w-full h-full rounded-full">
		</div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>
