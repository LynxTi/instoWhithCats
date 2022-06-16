<template >
    <div class="uploadBlock">
        <div class="formWrap">
            <div class="imgeWrap">
                <img class="img"
                v-if="fileURL" 
                :src="fileURL" 
                >
            </div>
            <form class="form">
                 <label for="inputfile" class="label">
                    <span class="labelSpan">Upload</span>
                 </label>
                <input type="file" class="inputUpload" ref="file" id="inputfile" @change="uploadPhoto" accept=".jpg,.png"/>
                <My-button @click="submitCatPhoto" :disabled="file == false">Submit</My-button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import MyButtonVue from '@/components/UI/My-button.vue';
const apiKey = '5dd4790f-ef29-44b0-8dbc-cc14d6acd33a';

export default {
    data() {
        return {
            file: "",
            fileURL: ""
        };
    },
    methods: {
        uploadPhoto() {
            this.file = this.$refs.file.files[0];
            this.fileURL = URL.createObjectURL(this.file);
        },
        async submitCatPhoto(e) {
            e.preventDefault();
            const formData = new FormData;
            formData.append("file", this.file);
            if (this.file) {
                try {
                    const { data } = await axios.post("https://api.thecatapi.com/v1/images/upload", formData, { headers: { "x-api-key": apiKey } });
                    console.log("data: ", data);
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    },
    components: { MyButtonVue }
}
</script>
<style >
    .formWrap {
        display: inline-block;
    }
    .uploadBlock{
        height: 500px;
        padding: 30px;
    }
    .imgeWrap {
        width: 400px;
        height: 300px;
        background-color: rgb(241, 241, 241);
        border: 2px solid rgb(211, 184, 32);
        margin-bottom: 20px;
    }
    .img {
        width: 400px;
        height: 300px;
    }
    .inputUpload {
        display: none;
    }
    .label {
        font-weight: bold;
        cursor: pointer;
        border: 1px dotted;
        border-radius: 10px;
        padding: 10px 15px;
    }

    .form {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>