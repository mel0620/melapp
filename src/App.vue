<template>
	<v-app>
		<v-navigation-drawer fixed v-model="drawer" app>
			<v-list dense>
				<v-list-tile to="/">
					<v-list-tile-action>
						<v-icon>home</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile to="/about">
					<v-list-tile-action>
						<v-icon>info</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>About</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar color="indigo" dark fixed app>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>MELAPP</v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container fluid fill-height>
				<router-view></router-view>
			</v-container>
		</v-content>
		<!-- <v-footer color="indigo" app inset>
			<span class="white--text">&copy; 2017</span>
		</v-footer> -->
	</v-app>
</template>

<script>
	export default {
		name: "App",
		data: () => ({
			drawer: null
		})
	};

</script>
