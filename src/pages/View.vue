<template>
    <div>
        <PhotoList :photos="this.photoList"/>
    </div>
</template>

<script>
import PhotoList from '@/components/PhotoList';
import axios from 'axios';
const apiKey = '5dd4790f-ef29-44b0-8dbc-cc14d6acd33a';

export default {
    data() {
        return {
            photoList: []
        }},
    methods: {
        async getCatsPhoto() {
            try {
                const {data} = await axios.get('https://api.thecatapi.com/v1/images?limit=20', {headers: {'x-api-key': apiKey}});
                this.photoList.push(...data);

                console.log('data: ', data);

            } catch (error) {
                console.log('Alarm, Error: ', error);
            }
        }},
    components: {
        PhotoList
    },
    mounted() {
            this.getCatsPhoto()
        }
}

</script>

<style>
    
</style>