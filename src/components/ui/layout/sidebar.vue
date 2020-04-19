<template>
    <div class="sidebar">
        <ul>
            <li><a href="">Remember</a></li>
            <li><a href="">Logins</a></li>
        </ul>
    </div>

</template>
<script>
    export default {
        name: 'sidebar',
        props: {
        }
    }
</script>
<style lang="scss">
    .sidebar {
        margin: 0;
        padding: 0;
        width: 250px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
        ul {
            li {
                a {
                    color: blue;
                }
            }
            li:hover {
                background-color: aqua;
            }
        }
    }
</style>
