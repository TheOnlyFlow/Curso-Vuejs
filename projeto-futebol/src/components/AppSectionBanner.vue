<template>
     <section>
         <div class="container">

             <div class="row">

                 <div class="col-5 text-center principal-news">
                     <h2>Veja o Feed de Cameras</h2>
                 </div>

                 <div class="col-5 offset-2 text-center principal-news">
                     <h2>Venha conferir teste</h2>
                 </div>

             </div>

         </div>

     </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
    margin-top: 25px;
    background-color:rgba(242, 204, 143, 0.3);
}
.container .row{
    height: 300px;
}

.container .row .col-5:first-child{
    background-color: rgba(37, 36, 34, 0.5);
    background-image: url('../assets/camera-seguranca.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
.container .row .col-5:nth-child(2){
    background: url('../assets/app-camera.jpg') no-repeat;
    background-size: 100%;
}
h2 {
    margin: 25% 0;
    color: #fffcf2;
    background-color: rgba(37, 36, 34, 0.5) ;
}

.principal-news {
    cursor: pointer;
}
</style>