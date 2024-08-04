<script>
    export let dark = false
    import { PUBLIC_SITE_NAME, PUBLIC_URL_BASE } from '$env/static/public';
    import { lightmode } from '$lib/stores'
</script>

<h2 class="!text-transparent bg-clip-text focus:outline-none focus:shadow-outline">
    <a title="{PUBLIC_SITE_NAME}" href={PUBLIC_URL_BASE} class="flex items-center">
        <img
            src={ (dark ? false : $lightmode) ? '/kuantis-logo-full.png' : '/kuantis-logo-full.png'}
            class="h-16"
            alt="{PUBLIC_SITE_NAME} Logo" />
    </a>
</h2>