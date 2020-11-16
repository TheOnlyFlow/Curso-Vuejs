<template>
    <header>

        <div class="container">
            <nav class="navbar navbar-expand">
                <a href="#" class="link navbar-brand mr-auto">
                <img src="./../assets/deg-branco.png" alt="Logo DG"
                class="img d-inline-block align-top" id="logo">
                 Cameras
                </a>

                <div class="links mr-2">

                    <a href="#" @click.prevent="$emit('change-component', 'home')" class="btn mr-5">Início</a>
                    <a href="#" @click.prevent="$emit('change-component', 'feed')" class="btn mr-5">Feed</a>
                    <a href="#" class="btn mr-5">Cameras</a>

                    <select name="ambientes" id="select-ambientes"
                    class="form-control" @change="$emit('select-ambientes',
                    $event.target.value)">
                    <option value="">Selecione um Ambiente</option>
                    <option value="Entrada Portaria">Entrada Portaria</option>
                    <option value="Quadra de Futebol">Quadra de Futebol</option>
                    <option value="Churrasqueira">Churrasqueira</option>
                    <option value="Playground">Playground</option>
                    </select>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
header {
    background-color: #06d79c;
}

#logo{
    width: 100px;
    height: 100%;

}
.links {
    display: inline-flex;
}
.link{
    color: white ;
    font-size: 30px;
    font-family: 'Monsterrat';
}
.links a{
    color: white;
    font-size: 1.4em;
    font-family: 'Monsterrat';
}
.links a:focus {
    outline: none !important;
    box-shadow: none !important;
}
</style>
