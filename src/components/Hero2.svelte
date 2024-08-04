<script>
	import { t } from '$lib/i18n';
	import {} from '@skeletonlabs/skeleton';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<section class="w-full my-12 group section-style -z-50">
	<div class="max-w-6xl mx-auto">
		<div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 p-4">
			<div class="col-span-1">
				<div class="text- items-left tracking-wide text-2xl text-secondary-500">Trusted</div>
				<div
					class=" items-left tracking-tight text-left mb-10 text-4xl md:text-4xl lg:text-5xl drop-shadow font-medium text-primary-500"
				>
					{$t('hero.title2')} <br />
				</div>
				<div class="max-w-3xl mx-auto tracking-normal text-left text-xl md:text-2xl mb-16">
					{@html $t('hero.sub-title')}
				</div>
                    <div class="flex flex-wrap gap-3 md:space-x-3 md:block text-primary-700">
                         <a
                              href="/contact"
                              class="btn btn-lg variant-glass-surface"
                              ><span
                                   ><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                                        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                                             d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
                                        /></svg
                                   ></span
                              ><span class="font-medium">Contact Us</span></a
                         >
                    </div>
			</div>
			<div>
				<div class="-z-10 transition duration-300 hidden md:block">
					<img
						src="images/bg-business-deal.svg"
						class="h-80"
						alt="{PUBLIC_SITE_NAME} - Custom Web Development"
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
		position: relative;
		@apply -mt-52 md:mt-20 -z-50;
	}

	.wave {
		background: url(/images/bg-kuantis-com-wave-silver.svg) repeat-x;
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
