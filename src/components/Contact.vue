<script setup>
import Card from './ui/Card.vue'

</script>
<template>
  	<!-- Hire me -->
		<div class="container mt-20 flex justify-between items-center mx-auto px-8 pb-10 md:px-14 lg:px-24 md:w-11/12">
			<section class="w-full">
				<h2 id="hire" class="secondary-title">Hire me</h2>
				<p class="section-paragraph">Feel free to to contact me any time, through any method below.</p>

				<div class="w-full grid lg:grid-cols-3 gap-8 lg:gap-32 mt-14">
					  <form @submit.prevent="handleSubmit" class="space-y-6 col-span-2">
						<div>
							<label class="text-white block mb-3 text-lg font-bold">Name</label>
							<input type="text" name="from_name" v-model="name" class="w-full border border-input-border bg-input px-4 py-2">
						</div>
						<div>
							<label class="text-white block mb-3 text-lg font-bold">Email</label>
							<input type="email" name="from_email" v-model="email" class="w-full border border-input-border bg-input px-4 py-2">
						</div>
						<div>
							<label class="text-white block mb-3 text-lg font-bold">Message</label>
							<textarea type="text" name="message" v-model="message" class="w-full border border-input-border bg-input px-4 py-2 h-40 resize-none"></textarea>
						</div>
						<button type="submit" class="px-6 py-2 bg-theme text-white font-bold rounded">Send it!</button>
					  </form>

					<div class="mt-12">
						<!-- Contact info -->
						<p class="text-secondary" type="tel">233-504-628-244</p>
						<a href="mailto:eddiedanqz11@gmail.com" class="text-secondary underline mt-3 block rounded">eddiedanqz11@gmail.com</a>

						<!-- Socials -->
						<div class="flex mt-10 space-x-6">
					
							<!-- Twitter -->
							<a href="#">
								<svg class="w-8 h-8 lg:w-12 lg:h-12" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 0C9.40313 0 0 9.40313 0 21C0 32.5969 9.40313 42 21 42C32.5969 42 42 32.5969 42 21C42 9.40313 32.5969 0 21 0ZM31.0922 15.8297C31.1062 16.05 31.1062 16.2797 31.1062 16.5047C31.1062 23.3859 25.8656 31.3125 16.2891 31.3125C13.3359 31.3125 10.5984 30.4547 8.29219 28.9781C8.71406 29.025 9.11719 29.0437 9.54844 29.0437C11.9859 29.0437 14.2266 28.2188 16.0125 26.8219C13.725 26.775 11.8031 25.275 11.1469 23.2125C11.9484 23.3297 12.6703 23.3297 13.4953 23.1188C12.3175 22.8795 11.2588 22.2398 10.4991 21.3084C9.73949 20.377 9.32572 19.2113 9.32812 18.0094V17.9437C10.0172 18.3328 10.8281 18.5719 11.6766 18.6047C10.9633 18.1293 10.3784 17.4854 9.97365 16.7298C9.5689 15.9743 9.35683 15.1306 9.35625 14.2734C9.35625 13.3031 9.60938 12.4172 10.0641 11.6484C11.3714 13.2578 13.0028 14.5741 14.8522 15.5117C16.7016 16.4493 18.7275 16.9873 20.7984 17.0906C20.0625 13.5516 22.7063 10.6875 25.8844 10.6875C27.3844 10.6875 28.7344 11.3156 29.6859 12.3281C30.8625 12.1078 31.9875 11.6672 32.9906 11.0766C32.6016 12.2812 31.7859 13.2984 30.7031 13.9406C31.7531 13.8281 32.7656 13.5375 33.7031 13.1297C32.9953 14.1703 32.1094 15.0938 31.0922 15.8297Z" fill="white"/></svg>								
							</a>
						</div>
					</div>
					
				</div>

			</section>
		</div>

</template>
<script>
import { client} from "../client";
import emailjs from 'emailjs-com';

export default {
	name: "Contact",
  data() {
    return {
      name: '',
      email: '',
	  message:'',
	  IsFormSubmitted:false,
    };
  },
  methods:{
	handleSubmit(e){
 try {
        emailjs.sendForm('service_efocumd', 'template_gr2jj6n', e.target,
        '-kxHB8Px8dOwFQHhV', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
	}
  }
}
</script>
