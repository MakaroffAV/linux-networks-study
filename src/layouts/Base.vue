<template>
    <body class="layout-fluid theme-light">
        <div class="page">

            <NavBar />

			<div class="page-wrapper">
				<slot name="content"></slot>
			</div>

        </div>
    </body>
</template>


<script>

/*
	Author:	Makarov Aleksei
	Target:	Base layout page
*/

import NavBar from "../components/NavBar.vue"

export default {

	components: {
		NavBar
	}

}
	
</script>
 