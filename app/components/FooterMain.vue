<script lang="ts">
// import type { NavigationMenuItem} from '@nuxt/ui'

// const items: NavigationMenuItem[] = [{
//     label: '',
//     to: 'https://github.com/Joel-Reyess',
//     target: '_blank',
// }]

</script>
<template>
<UFooter>
    <template #left>
        <p class="text-muted text-sm">
            Copyright © {{ new Date().getFullYear() }}
        </p>
    </template>
    <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/joel-reyes-006030282"
          target="_blank"
          aria-label="LinkedIn"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/Joel-Reyess"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
</UFooter>
</template>