<template>
    <div>
        <h1>Get All User</h1>
    </div>
</template>

<script>
export default {
    created(){
        this.$http.get('http://localhost:8081/users')
        .then(function (response) {
            console.log(response);
        })
    }
}
</script>

<style>

</style>