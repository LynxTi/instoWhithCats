<template>
        <button class="btn">
            <slot></slot>
        </button>
</template>

<script>
export default {
    name: 'My-button'
}
</script>
<style>
    .btn {
        padding: 10px 15px;
        background: none;
        color: rgb(211, 184, 32);
        border: 2px solid rgb(211, 184, 32);
        border-radius: 10px;
        cursor: pointer;
    }
</style>