<script>
	import { t } from '$lib/i18n';
	import {} from '@skeletonlabs/skeleton';
	import { SITE_NAME } from '$lib/variables';
</script>

<section class="w-full my-12 group section-style -z-50">
	<div class="max-w-5xl mx-auto">
		<div class="inline-grid grid-cols-2 grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 mt-2 p-4">
			<div class="col-span-2">
				<div class="text- items-left tracking-wide text-2xl text-secondary-500">Trusted</div>
				<div
					class=" items-left tracking-tight text-left mb-10 text-4xl md:text-4xl lg:text-5xl drop-shadow font-medium text-primary-500"
				>
					{$t('hero.title2')} <br />
				</div>
				<div class="max-w-2xl mx-auto tracking-normal text-left text-xl md:text-2xl mb-16">
					" {@html $t('hero.sub-title')} "
				</div>
				<div class="flex flex-wrap gap-3 md:space-x-3 md:block mt-4">
					<a
						href="https://api.whatsapp.com/send?phone=6281212626030&text=Hello%20team%kuantis.com"
						class="btn variant-filled-success"
						><span><i class="fa-brands fa-whatsapp" /></span><span>Whatsapp</span></a
					>
					<!-- <a href="#whatwedo" class="btn variant-filled-primary">Our Way</a> -->
				</div>
			</div>
			<div class="hidden lg:block">
				<div class="-z-10 transition duration-300">
					<img
						src="images/services-web-development-noback.svg"
						class="w-full"
						alt="{SITE_NAME} - Custom Web Development"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="ocean">
		<div class="wave" />
		<div class="wave" />
	</div>
</section>

<style lang="postcss">
	.ocean {
		/* height: 5%;
        width: 100%; */
		position: relative;
		/* bottom: 0;
        left: 0;
        top: 10px; */
		/* background: #015871; */
		@apply mt-20 -z-50;
	}

	.wave {
		background: url(/images/bg-kuantis-com-wave.svg) repeat-x;
		position: absolute;
		top: -500px;
		width: 6400px;
		height: 500px;
		animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
		transform: translate3d(0, 0, 0);
	}

	.wave:nth-of-type(2) {
		top: -500px;
		animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -1.125s infinite,
			swell 7s ease -1.25s infinite;
		opacity: 1;
		transform: translate3d(0, -50px, 0);
	}

	@keyframes wave {
		0% {
			margin-left: 0;
		}
		100% {
			margin-left: -1600px;
		}
	}

	@keyframes swell {
		0%,
		100% {
			transform: translate3d(0, -30px, 0);
		}
		50% {
			transform: translate3d(0, 40px, 0);
		}
	}

	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}
</style>
