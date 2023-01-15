<template>
  
    <div class="container mt-3 flex justify-between items-center mx-auto px-8 md:px-12 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
            <nav class="hidden fixed left-percentage md:inline-block lg:mr-26 lg:w-4 xl:block">
                <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                    <a href="#" class="nav-dot selected-circle block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0 z-50">Home</span>
                    </a>
                    <a href="#work" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                    </a>
                    <a href="#skills" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Skills</span>
                    </a>
                    <a href="#clients" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Clients</span>
                    </a>
                    <a href="#hire" class="nav-dot block w-6 h-6 rounded-full border-4 border-nav bg-body">
                        <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                    </a>
                </div>
            </nav>
      <div class="flex flex-col-reverse items-center md:flex-row md:justify-between">
            <div class="flex flex-wrap justify-center max-w-3xl mt-0 lg:mx-20 md:max-w-xl md:my-32">
                <h1 class="font-bold text-4xl md:text-2xl lg:text-4xl text-center md:text-left">
                    Hi, I’m Edmund Danquah, <small class="text-2xl"> <br/> a front-end developer focused on builidng beautiful web
                    experiences while writing clean code.</small>
                </h1>
                <div class="w-full flex justify-center md:justify-start">
                    <a type="button" href="../../public/eddie-resume.pdf" class="px-6 py-2.5 bg-theme text-white font-bold mt-10 flex items-center space-x-3 rounded-sm shadow-2xl"
                    download>
                        <span>Download CV.</span>
                    </a>
                </div>
            </div>

		<div class="mx-auto h-56 w-56 rounded-full mt-12 mb-8 bg-center bg-cover md:w-80 md:h-80 md:-z-1">
            <img src="../assets/img/danqz11-half.jpg" alt="Man" class="w-full h-full rounded-full object-center">
		</div>
        </div>
        </div>
    </div>

</template>

<script>
export default {
name:'Hero',
methods:{
    download (){
         const url = '../assets/img/man.png';
                window.location.href = url;
    }
}
}
</script>
