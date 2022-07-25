<template>
  <div class="home">
    <h1><b>Buscar un peleador por ID</b></h1>
    <div id="busqueda" class="input-group my-3">
      <input type="text" v-model="id" class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button @click.prevent="buscarPeleadores(id)" class="btn btn-outline-dark" type="button" id="button-addon2">Buscar</button>
    </div>
    <br>
    <router-link to="/"><button to="/" class="btn btn-outline-dark" type="button" id="button-addon2">Volver al Inicio</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Buscar',
  data(){
    return{
      id:'',
    };
  },
  methods:{
    buscarPeleadores(id){
      this.$router.push(`peleadores/${id}`)
    },
  }
}
</script>

<style scoped>
  #busqueda{
    width: 50%;
    display: inline-flex;
  }
</style>
