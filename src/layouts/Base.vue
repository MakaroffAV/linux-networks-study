<template>
    <body class="layout-fluid theme-light">
        <div class="page">

			<Header />
            <NavBar />

			<div class="page-wrapper">
				<slot name="content"></slot>
			</div>

        </div>
    </body>
</template>


<script>

import NavBar from "../components/NavBar.vue"
import Header from "../components/Header.vue"

export default {

	components: {
		NavBar,
		Header
	}

}
	
</script>
 