<template>
	<nuxt-layout name="main">
		<h2 class="mb-12 text-center text-4xl font-extrabold">Latest articles</h2>
		<div class="mx-4 grid gap-3 md:mx-0 lg:grid-cols-2 lg:gap-10">
			<content-list v-slot="{ list }" :query="query">
				<nuxt-link
					v-for="article of list"
					:to="article._path"
					:key="article._path"
					class="rounded-lg bg-zinc-100 p-4 shadow-md drop-shadow-md dark:bg-zinc-700"
				>
					<div class="flex">
						<div>
							<img
								:src="`/images/${article.image}.png`"
								:alt="article.image"
								class="inline select-none rounded-lg shadow-lg hover:saturate-150"
								width="96"
								height="96"
							/>
						</div>

						<div class="pl-4">
							<div class="mb-3 text-xl font-semibold hover:underline">
								{{ article.title }}
							</div>
							<p class="mb-6 opacity-80">
								<small>
									Published on <u :title="longDate.format(new Date(article.date))">{{ date.format(new Date(article.date)) }}</u> by
									<span class="opacity-90">{{ article.author }}</span></small
								>
							</p>
						</div>
					</div>

					<p class="pt-4 opacity-90">
						{{ article.description }}
					</p>
				</nuxt-link>
			</content-list>
		</div>
	</nuxt-layout>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

definePageMeta({
	documentDriven: false
});

const query = {
	limit: 10,
	sort: [{ date: -1 }],
	only: ['_path', 'title', 'description', 'image', 'date', 'author']
} satisfies QueryBuilderParams;

const date = new Intl.DateTimeFormat(['en-GB', 'en-US']);
const longDate = new Intl.DateTimeFormat(['en-GB', 'en-US'], { dateStyle: 'full' });

useHead({
	title: 'Skyra Blog'
});
</script>
