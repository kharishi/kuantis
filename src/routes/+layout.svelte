<script lang="ts">
	import '../app.postcss';
	import Logo from '../components/Logo.svelte';
	import { browser } from '$app/environment';
	import Footer from '../components/Footer2.svelte';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { PUBLIC_SITE_NAME, PUBLIC_URL_BASE, PUBLIC_SITE_DESCRIPTION } from '$env/static/public';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	// import { attr } from 'svelte/internal'

	/** @type {import('./$types').LayoutData} */
	export let data: any;

	let yScreen: number;
	let scrollActive: boolean = false;

	let language;

	if (browser) {
		language = localStorage.getItem('language') == 'en' ? 'en' : 'id';
	}

	// Show mobile icon and display menu
	let showMobileMenu = false;

	// List of navigation items
	let navItems = [
		{ label: 'menu.home', href: '/' },
		{ label: 'menu.services', href: '/services' },
		{ label: 'menu.contact-us', href: '/contact' }
		// { label: 'menu.docs', href: '/docs' },
		// { label: 'menu.blog', href: '/blog' }
		// { label: 'menu.login', href: '/login' }
	];

	// Mobile menu click event handler
	const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

	// Attach media query listener on mount hook
	onMount(() => {
		const mql = window.matchMedia('(max-width: 767px)');

		mql.addEventListener('change', (e) => {
			if (!e.matches) {
				showMobileMenu = false;
			}
		});
	});
	$: {
		if (yScreen >= 5) {
			scrollActive = true;
		}
		scrollActive = scrollActive;
		// console.log(showMobileMenu)
	}
</script>

<svelte:head>
	<title>{PUBLIC_SITE_NAME} - {PUBLIC_SITE_DESCRIPTION}</title>
	<meta name="description" content={PUBLIC_SITE_DESCRIPTION} />
</svelte:head>
<svelte:window bind:scrollY={yScreen} />

{#if browser}
	<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
		<svelte:fragment slot="header">
			<AppBar background="bg-surface-50"
				padding="max-w-6xl mx-auto p-4"
				gridColumns="grid-cols-3"
				slotDefault="place-self-center"
				slotTrail="place-content-end"
			>
				<svelte:fragment slot="lead"><Logo /></svelte:fragment>
				<svelte:fragment slot="trail">
					<a href="/" class="btn !bg-transparent">
						<span>Home</span>
					</a>
					<a href="/services" class="btn !bg-transparent">
						<span>Services</span>
					</a>
					<a href="/contact" class="btn !bg-transparent">
						<span>Contact</span>
					</a>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- <svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment> -->
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<section>
			<PageTransition url={data.url}>
				<slot />
			</PageTransition>
		</section>
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
		<!-- (footer) -->
	</AppShell>
{:else}
	<div class="sk-folding-cube">
		<div class="sk-cube1 sk-cube" />
		<div class="sk-cube2 sk-cube" />
		<div class="sk-cube4 sk-cube" />
		<div class="sk-cube3 sk-cube" />
	</div>
{/if}

<style lang="postcss">
	
	/* SPINNER */

	.sk-folding-cube {
		margin: 10em auto;
		width: 40px;
		height: 40px;
		position: relative;
		-webkit-transform: rotateZ(45deg);
		transform: rotateZ(45deg);
	}

	.sk-folding-cube .sk-cube {
		float: left;
		width: 50%;
		height: 50%;
		position: relative;
		-webkit-transform: scale(1.1);
		-ms-transform: scale(1.1);
		transform: scale(1.1);
	}
	.sk-folding-cube .sk-cube:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #ffcc00;
		-webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
		animation: sk-foldCubeAngle 2.4s infinite linear both;
		-webkit-transform-origin: 100% 100%;
		-ms-transform-origin: 100% 100%;
		transform-origin: 100% 100%;
	}
	.sk-folding-cube .sk-cube2 {
		-webkit-transform: scale(1.1) rotateZ(90deg);
		transform: scale(1.1) rotateZ(90deg);
	}
	.sk-folding-cube .sk-cube3 {
		-webkit-transform: scale(1.1) rotateZ(180deg);
		transform: scale(1.1) rotateZ(180deg);
	}
	.sk-folding-cube .sk-cube4 {
		-webkit-transform: scale(1.1) rotateZ(270deg);
		transform: scale(1.1) rotateZ(270deg);
	}
	.sk-folding-cube .sk-cube2:before {
		-webkit-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}
	.sk-folding-cube .sk-cube3:before {
		-webkit-animation-delay: 0.6s;
		animation-delay: 0.6s;
	}
	.sk-folding-cube .sk-cube4:before {
		-webkit-animation-delay: 0.9s;
		animation-delay: 0.9s;
	}
	@-webkit-keyframes sk-foldCubeAngle {
		0%,
		10% {
			-webkit-transform: perspective(140px) rotateX(-180deg);
			transform: perspective(140px) rotateX(-180deg);
			opacity: 0;
		}
		25%,
		75% {
			-webkit-transform: perspective(140px) rotateX(0deg);
			transform: perspective(140px) rotateX(0deg);
			opacity: 1;
		}
		90%,
		100% {
			-webkit-transform: perspective(140px) rotateY(180deg);
			transform: perspective(140px) rotateY(180deg);
			opacity: 0;
		}
	}

	@keyframes sk-foldCubeAngle {
		0%,
		10% {
			-webkit-transform: perspective(140px) rotateX(-180deg);
			transform: perspective(140px) rotateX(-180deg);
			opacity: 0;
		}
		25%,
		75% {
			-webkit-transform: perspective(140px) rotateX(0deg);
			transform: perspective(140px) rotateX(0deg);
			opacity: 1;
		}
		90%,
		100% {
			-webkit-transform: perspective(140px) rotateY(180deg);
			transform: perspective(140px) rotateY(180deg);
			opacity: 0;
		}
	}
</style>
