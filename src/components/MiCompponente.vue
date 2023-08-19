<template>
    <div class="mi-componente">
        <h1 v-if="isVisible">{{ message }}</h1>   <!-- Directivas -->
        <h2 v-bind:class="{ highlighted: isHighlighted }">{{ title }}</h2>
        <!--<button v-on:click="$event =>isVisible = !isVisible">Ocultar/Mostrar</button>   forma normal -->
        <button v-on:click="toggleVisibility">Ocultar/Mostrar (m)</button> <!--  Pasando un metodo -->        
        <input v-model="message">
        <button v-on:click="sayHello">Alerta</button> <!--  Pasando un metodo -->
        <button @click="sayHello">Alerta (@)</button> <!--  blazor -->        
        <button v-on:click="toggleHighlight">Dorado</button> <!--  cambiar a dorado -->        
        <ul>            
            <li v-for="item in list" :key = "item.id" >{{ item.id  + ' '+ item.text }}</li>
        </ul>

        <h3>{{ mensaje }}</h3>
        <button @click="changeMessage">Cambiar mensaje</button> 

    </div>
</template>

<style scoped>
    .highlighted{
        color:gold;
    }
</style>

<script>
    export default {
        name: 'MiComponente',
        data(){
            return{
                message: 'Hola mundo desde vue',
                title: 'Esto es el subtitulo',
                isHighlighted: false,
                isVisible:true,
                list: [
                    {id:1, text:'primer item'},
                    {id:2, text:'segundo item'},
                    {id:3, text:'tercer item'}
                ]
            }
        },
        methods: {
            toggleVisibility(){
                this.isVisible=!this.isVisible;
            },
            sayHello(){
                alert('Hola desde Vs');
            },
            toggleHighlight(){
                this.isHighlighted=!this.isHighlighted;
            }
            
        },
    }
</script>
