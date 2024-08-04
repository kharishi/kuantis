<script lang="ts">

    import { ToggleCore } from 'svelte-toggle'
    import { locale, t } from '$lib/i18n'
    import { browser } from '$app/environment'
    import { LightSwitch } from '@skeletonlabs/skeleton';
    // import ButtonLink from '$lib/components/ButtonLink.svelte'

    let language = 'id'

    if (browser) {
        language = localStorage.getItem('language') == 'id' ? 'id' : 'en'
    }

    $: $locale = language

    let yScreen: number
    let scrollActive = false

    $: {
        if (yScreen >= 5) {
            scrollActive = true
        }
        scrollActive = scrollActive
        // console.log(scrollActive);
    }
</script>

<svelte:window bind:scrollY={yScreen} />
<section>
    <div
        class="w-full mx-auto py-1 text-sm border-b-[1px] border-slate-100 dark:border-slate-800">
        <div class="flex max-w-5xl w-full mx-auto">
            <span class="relative group inline-block">
                <a
                    href="/"
                    class="inline-flex items-center text-black group-hover:bg-slate-100 group-hover:rounded-t-lg group-hover:dark:bg-slate-800 py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"
                        ><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                            d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" /></svg>
                    &nbsp;&nbsp;{$t('topbar.support')}
                </a>
                <ul
                    class="absolute z-30 bg-slate-100 dark:bg-slate-800 invisible group-hover:visible group-hover:rounded-b-lg group-hover:rounded-tr-lg w-48">
                    <li class="border-b border-slate-200">
                        <a
                            href="tel:+6281212626030"
                            class="px-4 py-2 block text-black hover:bg-grey-lighter">Call us</a>
                    </li>
                    <li class="border-b border-slate-200">
                        <a
                            href="https://api.whatsapp.com/send?phone=6281212626030&text=Hello%20team%20kuantis.com"
                            class="px-4 py-2 block text-black hover:bg-grey-lighter"
                            >Whatsapp</a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            class="px-4 py-2 block text-black hover:bg-grey-lighter"
                            >Email us</a>
                    </li>
                </ul>
            </span>
            <div class="ml-auto flex items-center">
                
                <ToggleCore toggled={language == 'id' ? false : true} let:button>
                    <button
                        class="px-3 font-normal text-gray-900 hover:text-yellow-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:text-white"
                        {...button}
                        on:click={() => {
                            language = language == 'en' ? 'id' : 'en'
                            localStorage.setItem('language', language)
                            $locale = language
                        }}>
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>&nbsp;&nbsp;{language == 'id' ? 'English (US)' : 'Bahasa (ID)'}
                        </span>
                    </button>
                </ToggleCore>
                <LightSwitch />
            </div>
        </div>
    </div>
</section>
