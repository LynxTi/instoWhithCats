<template>
    <div class="photoItem">
        <img class="photoImg"
            :src="photo.url"
            @dblclick="setLike"/>
        <div class="svgBlock" 
            @click="setLike">
                <svg v-if="!isLiked" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z"/></svg>
                <svg v-if="isLiked" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
const apiKey = '5dd4790f-ef29-44b0-8dbc-cc14d6acd33a';

export default {
    props: {
        photo: {
            type: Object,
            reqired: true
        } 
    },
    data() {
        return {
            isLiked : false
        }
    },
    methods: {
        async setLike () {
            try {
                this.isLiked = !this.isLiked;
                const {data} = await axios.post('https://api.thecatapi.com/v1/votes',
                    { image_id: this.photo.id, value: !this.isLiked}, 
                    {headers: {'x-api-key': apiKey}});

                console.log('data: ', data);
            } catch (e) {
                console.log('meow, alyarm! Error: ', e);
            }
        }
    }
 
}
</script>
 
<style>
    .photoItem{
        width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid rgb(211, 184, 32);
        
    }
    .photoImg {
        width: 700px;
        height: 500px;
    }
    .svgBlock {
        padding: 15px;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

</style>