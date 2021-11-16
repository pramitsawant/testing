<template>
	<v-app-bar dense class="rounded" flat>
		<v-container class="py-0 fill-height" fluid>
			<v-avatar color="grey darken-1" size="32"></v-avatar>

			<v-btn text link value="home">
				<span> App</span>
			</v-btn>

			<v-spacer></v-spacer>

			<v-responsive max-width="260">
				<!-- <v-text-field dense flat hide-details rounded solo-inverted placeholder="Design name">
                                </v-text-field> -->
			</v-responsive>
			<v-btn text value="share">
				<span class="capitalize">Share</span>
			</v-btn>
			<v-btn text value="download">
				<span>Download</span>
			</v-btn>
		</v-container>
	</v-app-bar>
</template>
