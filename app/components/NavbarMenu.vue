<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route= useRoute();
const items= computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    href: '/',
    active: route.path.startsWith('/index'),
  },
  {
    label: 'About',
    href: '/about',
    active: route.path.startsWith('/about'),
  },
  {
    label: 'Contact',
    href: '/contact',
    active: route.path.startsWith('/contact'),
  },
])

</script>
<template>
    <UHeader title="Joel Reyes" :toggle="{
      color: 'primary',
      variant: 'subtle',
      class: 'rounded-full'
    }">
    <UNavigationMenu :items="items" />
        <template #right>
            <UColorModeButton />
        </template>
        <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
    </UHeader>
</template>