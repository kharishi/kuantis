<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<section class="z-20 mt-10 section-style dark:bg-none max-w-5xl mx-auto rounded-lg">
	<Divider border={false} size="large" />
	<div id="whatwedo" class="group grid grid-cols-1 grid-rows-2 mx-auto">
		<div class="col-span-1 relative">
			<div class="col-span-1 section-header mb-14 text-center">HOW WE HELP YOU</div>
			<p class="col-span-1 section-subheader text-center">
				We help you <b>streamline</b> your business
				<b>workflow</b>, make it simple and more efficient, then deliver it with optimized and
				proven technology for <b>the best user experience</b>
			</p>
		</div>
		<div class="col-span-1">
			<div class="relative">
				<div class="mx-auto max-w-3xl">
					<img
						src="images/bg-streamline.svg"
						class="relative w-full z-20"
						alt="{PUBLIC_SITE_NAME} - Streamline"
					/>
				</div>
			</div>
		</div>
	</div>
	<Divider border={false} size="large" />
</section>
