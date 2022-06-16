<template>
    <div class="footer">
        <div class="aboutAthor">
            <div>Created by :</div>
            <div>Andrii T.</div>
        </div>
    </div>
</template>

<script>
export default {
    
}

</script>

<style>
    .footer {
        width: 100%;
        height: 100%;
        min-height: 70px;
        background-color: rgb(241, 241, 241);
        border-top: 2px solid rgb(211, 184, 32);
        position: sticky;
        bottom: 0;
        display: flex;
    }
    .aboutAthor{
        position: absolute;
        right: 15px;
        bottom: 15px;
        font-weight: bold;
    }
</style>