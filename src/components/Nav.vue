

<template>
   <header class="py-6">
        <div class="container flex justify-between items-center mx-auto px-5 md:px-14 lg:px-24 w-full">
            <div class="text-lg font-bold">Eddie.io</div>
            <div class="flex flex-col items-center animate__animated animate__fadeInLeft md:flex-row md:space-x-8 md:flex" 
            :class="[open ? 'bg-body absolute left-0 top-14 space-y-6 px-6 py-4 w-10/12 shadow-lg' : 'left-[-100%] hidden']">
                <a href="#" class="text-selected-text self-start">Home</a>
                <a href="#work" class="self-start">My work</a>
                <a href="#skills" class="self-start">Skills</a>
                <a href="#clients" class="self-start">Clients</a>
                <a href="#hire" class="self-start">
				<button class="px-6 py-1.5 bg-theme font-semibold rounded-sm text-base">Hire me</button>
			   </a>
            </div>
            <div class="md:hidden hamburger" :class="[ open ? 'open' : '' ]" @click="menuOpen()">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'Nav',
    data(){
        return{
            open:false
        }
    },
    methods:{
        menuOpen(){
           this.open = !this.open
        }
    }
}
</script>