<script lang="ts">
    import Divider from '$lib/components/Divider.svelte'
    import { PUBLIC_SITE_NAME } from '$env/static/public';
</script>

<section class="section-style px-6 md:px-0">
    <Divider border={false} size="medium" translate="right" />
    <div class="max-w-5xl mx-auto">
        <div class="mb-52">
            <div
                class="col-span-1 text-justify sm:text-left section-header mb-8">
                OUR SERVICES
            </div>
            <div class="col-span-1 section-subheader text-justify sm:text-left">
                Custom software development services to create mobile apps, websites and web
                applications from idea to post-launch support for all-sized businesses of various
                industries.
            </div>
        </div>
        
        <div
            class="grid grid-cols-1 gap-x-4 gap-y-48
                    sm:grid-cols-2 sm:gap-x-8 sm:gap-y-32
                    md:grid-cols-2 md:gap-x-10 md:gap-y-32
                    lg:grid-cols-2 lg:gap-x-32 lg:gap-y-36">
            <div class="relative group">
                <div class="absolute z-10 -top-28 left-5 lg:group-hover:animate-vote">
                    <img
                        src="images/services-web-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="{PUBLIC_SITE_NAME} - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute bg-service inset-0 transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">Custom Web Development</h3>
                    <p class="text-black dark:text-gray-300 text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute z-10 -top-28 left-5 lg:group-hover:animate-vote">
                    <img
                        src="images/services-backend-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="{PUBLIC_SITE_NAME} - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute bg-service inset-0 transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5 ">
                    <h3 class="header-service">Backend Development</h3>
                    <p class="text-black dark:text-gray-300 text-base text-left">
                        Need to make performan API, API Gateway management, and DevOps cycle, we cover it.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute z-10 -top-28 left-5 lg:group-hover:animate-vote">
                    <img
                        src="images/services-desktop-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="{PUBLIC_SITE_NAME} - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute bg-service inset-0 transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">Services Development</h3>
                    <p class="text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
            <div class="relative group">
                <div class="absolute z-10 -top-28 left-5 lg:group-hover:animate-vote">
                    <img
                        src="images/services-backend-development.svg"
                        class="w-44"
                        width="176px"
                        height="176px"
                        alt="{PUBLIC_SITE_NAME} - Custom Web Development" />
                </div>
                <div aria-hidden="true" class="absolute bg-service inset-0 transition duration-300 group-hover:scale-105 lg:group-hover:scale-105" />
                <div class="relative text-left space-y-4 p-6 md:p-8 md:mt-5">
                    <h3 class="header-service">UI/UX Design</h3>
                    <p class="text-black dark:text-gray-300 text-base text-left">
                        Whether you need a small presentation website to attract new clients, or a
                        complete custom platform supporting millions of monthly visits, we can
                        tailor a solution that is right for your own particular needs.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</section>

<style lang="postcss">
    .header-service {
        @apply sm:pt-0 text-2xl font-bold text-gray-800 mt-10 sm:mt-10 md:mt-0;
    }

    .bg-service {
        @apply bg-surface-300 rounded-xl shadow-lg ;
    }

</style>
