<template>
    <div class="photosList">
        <PhotoItem v-for="photo in photos"
            :photo="photo"
            :key="photo.id"
            v-if="photos.length !== 0"
            >
        </PhotoItem>
            <h3 v-else>Loading...</h3>
    </div>
</template>

<script>
import PhotoItem from './PhotoItem.vue';

export default {
    props: {
        photos: {
            type: Array,
            required: true
        }
    },
    components: {
        PhotoItem
    }
}
</script>

<style>
    .photosList{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        padding: 30px;

    }
</style>