<template>
    <div id="UserContact" class="user_contact">
        <h2>{{username}}</h2>
        <h2>Contactos: <span>  {{contact}}  </span> </h2>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserContact',
    data: function (){
        return {
            username: "none",
            balance: 0
        }
    },

    created: function(){
        this.username = this.$route.params.username

        let self = this
        axios.get("http://127.0.0.1:8000/user/contact/" + this.username).then((result) => {
            self.contact = result.data.contact
        })
    }
}
</script>


<style>
    #UserBalance{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
    }

    #UserBalance h2{
        font-size: 50px;
        color: #504827;
    }

    #UserBalance span{
        color: rgb(13, 203, 236);
        font-weight: bold;
    }
</style>