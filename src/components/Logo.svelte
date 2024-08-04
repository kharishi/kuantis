<script>
    export let dark = false
    import { SITE_NAME, URL_BASE } from '$lib/variables'
    import { lightmode } from '$lib/stores'
</script>

<h2 class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline">
    <a title="{SITE_NAME}" href={URL_BASE} class="flex items-center">
        <img
            src={ (dark ? false : $lightmode) ? '/kuantis-logo-full.png' : '/kuantis-logo-full.png'}
            class="h-16"
            alt="{SITE_NAME} Logo" />
    </a>
</h2>