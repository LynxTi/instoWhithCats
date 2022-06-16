<template>
    <div>
        <PhotoList :photos="this.photoList"/>
    </div>
    <div ref="observer"></div>

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
            // В этой функции мы добовляем фотки котиков в масив для дальнейше отрисовки
            try {
                const {data} = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {headers: {'x-api-key': apiKey}});
                this.photoList.push(...data);

                console.log('data: ', data);
                console.log('photoList: ', this.photoList);

            } catch (error) {
                console.log('Alarm, Error: ', error);
            }
        },
        async getMoreCatsPhoto () {
            // Эта функция постоянной подгрузки КОТО ФОТОВ (ну типо бесконечная лента)
            const options = {
                rootMargin: '0px',
                threshold: 1.0
            }
            const callback = async (entries, observer) => {
               if (entries[0].isIntersecting) {
                await this.getCatsPhoto()
               }
            };
            const observer = new IntersectionObserver(callback, options);
            observer.observe(this.$refs.observer)
        }},
    components: {
        PhotoList
    },
    mounted() {
            this.getMoreCatsPhoto()
        }
}

</script>

<style>
    
</style>