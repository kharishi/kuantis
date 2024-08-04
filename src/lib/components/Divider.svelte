<script>
  export let border = false
  export let size = 'large' // small, medium, or large
  export let translate = 'none' // none, left, or right
</script>

<div class="max-w-full align-top block {border ? 'border-half' : ''} {translate == "left"? ' -translate-x-40' : (translate == "right" ? ' translate-x-40' : '')}"
  class:small={size === 'small'}
  class:medium={size === 'medium'}
  class:large={size === 'large'}
>&nbsp;</div>

<style lang="postcss">
  .small {
    @apply my-4;
  }
  .medium {
    @apply my-8;
  }
  .large {
    @apply my-14;
  }
  .border-half:before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    margin-top: 0px;
    width: 100%;
    border-top-width: 1px;
    @apply border-solid border-slate-200;
  }

  :global(.dark) .border-half:before {
    @apply border-t-2 border-solid border-slate-900;
  }
</style>
