<template>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle">
            <span class="nav-link-title">
                {{ this.title }}
            </span>
        </a>
    </li>
</template>

<script>

/*
    Author: Makarov Aleksei
    Target: Navigation bar element
*/

export default {

    props: {
        title: {
            type: String,
            required: true
        }
    }

}

</script>
