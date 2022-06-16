<template lang="">
  <div>
   <Header/>
   <Content/>
   <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

export default {
  components: {
    Header, 
    Content,
    Footer
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    background-color: rgb(241, 241, 241);

  }
</style>