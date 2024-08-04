<script>
	// @ts-nocheck

	import Logo from '../components/Logo.svelte';
	import { PUBLIC_PT_NAME, PUBLIC_URL_BASE } from '$env/static/public';
	import Divider from '$lib/components/Divider.svelte';
	import { ToggleCore } from 'svelte-toggle';
	import { locale } from '$lib/i18n';
	import { browser } from '$app/environment';
	// import { LightSwitch } from '@skeletonlabs/skeleton';

	let language = 'id';

	if (browser) {
		language = localStorage.getItem('language') == 'id' ? 'id' : 'en';
	}

	let ligthswitch;

	$: $locale = language;
</script>

<footer class="max-w-full bg-surface-300 dark:bg-teal-950 pb-2">
	<section>
		<Divider border={true} size="medium" />
		<div class="mx-auto w-full max-w-5xl">
			<div class="px-10">
				<div
					class="grid justify-between grid-cols-2 gap-x-12 gap-y-16 md:grid-cols-4 md:flex md:gap-x-28 md:gap-y-16"
				>
					<div>
						<h1><Logo dark={true} /></h1>
						<br />
					</div>
					<div>
						<h2>COMPANY</h2>
						<ul>
							<li>
								<a href="/services">Services</a>
							</li>
							<li>
								<a href="/contact">Contact</a>
							</li>
							<li>
								<a href="/blog">Blog</a>
							</li>
						</ul>
					</div>
					<div>
						<h2>Help center</h2>
						<ul>
							<li>
								<a href="https://www.instagram.com/kuantis.com">Instagram</a>
							</li>
							<li>
								<a href="https://www.facebook.com/@kuantis.com">Facebook </a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@kuantis.com">TikTok</a>
							</li>
						</ul>
					</div>
					<!-- <div>
						<ToggleCore toggled={language == 'id' ? false : true} let:button>
							<button
								type="button"
								class="px-3 pt-1 text-sm font-normal text-gray-900 bg-white rounded-md border border-gray-200 hover:bg-gray-100 dark:bg-teal-900 dark:border-teal-700 dark:text-white dark:hover:text-white dark:hover:bg-teal-800 dark:focus:text-white"
								{...button}
								on:click={() => {
									language = language == 'en' ? 'id' : 'en';
									localStorage.setItem('language', language);
									$locale = language;
								}}
							>
								<span class="inline-flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="w-4 h-4"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
										/>
									</svg>
									<span>&nbsp;{language == 'id' ? 'English' : 'Bahasa'}</span>
								</span>
							</button>
						</ToggleCore><br /><br />
						<LightSwitch />
					</div> -->
				</div>

				<Divider border={false} size="small" />

				<div class="sm:flex sm:items-center sm:justify-between mb-4">
					<span class="text-white sm:text-center dark:text-white text-base">
						<i class="fa-regular fa-copyright" /> 2023
						<a href={PUBLIC_URL_BASE}>{PUBLIC_PT_NAME}</a>, All Rights Reserved.
					</span>
					<div class="flex my-4 space-x-8 sm:justify-center sm:mt-0 items-center">
						<a
							href="https://www.facebook.com/@kuantis.com"
							alt="Kuantis Facebook"
							class="text-gray-500"
						>
							<i class="fa-brands fa-facebook-f" />
						</a>
						<a
							href="https://www.instagram.com/@kuantis.com"
							alt="Kuantis Instagram"
							class="text-gray-500"
						>
							<i class="fa-brands fa-instagram" />
						</a>
						<a
							href="https://www.tiktok.com/@kuantis.com"
							alt="Kuantis Tiktok"
							class="text-gray-500"
						>
							<i class="fa-brands fa-tiktok" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</footer>

<style lang="postcss">
	h2 {
		@apply text-slate-400 mb-6 text-xs font-normal uppercase;
	}
	footer a {
		@apply text-base font-normal text-white;
	}
	footer a:hover {
		@apply text-base font-normal underline underline-offset-2;
	}
	footer ul li {
		@apply mt-4;
	}
</style>
