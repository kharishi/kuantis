<script>
	import { PT_NAME, URL_BASE } from '$lib/variables';
</script>

<footer
	class="z-20 w-full"
>
	<hr class="!border-t-2" />
	<div class="md:flex md:items-center md:justify-between p-4 max-w-7xl mx-auto mb-10">
		<span class="sm:text-center text-sm text-surface-700-200-token">
			<i class="fa-regular fa-copyright" /> 2023 <a class="hover:underline" href={URL_BASE}>{PT_NAME}</a>, All Rights
			Reserved.
		</span>
		<ul
			class="flex flex-wrap items-center mt-3 text-sm font-normal text-surface-700-200-token sm:mt-0"
		>
			<li>
				<a href="/" class="mr-6 hover:underline md:mr-6">Home</a>
			</li>
			<li>
				<a href="/services" class="mr-6 hover:underline md:mr-6">Services</a>
			</li>
			<li>
				<a href="/contact" class="mr-6 hover:underline md:mr-6">Contacts</a>
			</li>
			<li>
				<a href="/career" class="mr-6 hover:underline md:mr-6">Career Oportunity</a>
			</li>
		</ul>
	</div>
</footer>
