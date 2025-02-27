<template>
	<nuxt-layout name="main" class="prose prose-zinc dark:prose-invert mx-auto max-w-full px-4">
		<template v-if="page">
			<div class="flex gap-4">
				<div>
					<img :src="`/images/${page.image}.png`" class="m-0 select-none rounded-lg shadow-lg" width="96" height="96" :alt="page.image" />
				</div>
				<div>
					<h1 class="mb-0">{{ page.title }}</h1>
					<small class="opacity-80">
						Published on <u :title="longDate.format(new Date(page.date))">{{ date.format(new Date(page.date)) }}</u> by
						<span class="opacity-90">{{ page.author }}</span>
					</small>
				</div>
			</div>
			<hr />
		</template>

		<slot></slot>

		<div class="px-4 pt-6 text-right md:px-0">
			<nuxt-link href="/" class="font-semibold">
				<button class="btn btn-ghost">
					<svg
						class="mr-2 h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
					</svg>
					Go Back
				</button>
			</nuxt-link>
		</div>
	</nuxt-layout>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection('content').path(route.path).first();
});

const date = new Intl.DateTimeFormat(['en-GB', 'en-US']);
const longDate = new Intl.DateTimeFormat(['en-GB', 'en-US'], { dateStyle: 'full' });
</script>

<style scoped>
.btn {
	@apply inline-flex cursor-pointer select-none flex-wrap items-center justify-center rounded-lg border-0 py-3 px-4 text-center no-underline;
	transition-property: background-color, box-shadow;
	transition-duration: 0.2s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-ghost {
	@apply bg-transparent text-current;
}

.btn:hover,
.btn:active {
	@apply bg-zinc-300/20 shadow-md drop-shadow-md dark:bg-stone-500/20;
}
</style>
