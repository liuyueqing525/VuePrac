<template>
    <div class="hello">
        <h1 v-html='msg'> <br>{{go.split(',').reverse().join('.')}}</h1>
        <p>
            For guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3 :id="id">Installed CLI Plugins</h3>
        <p v-if="seen">现在你又看到我了！</p>
        <p>
            我借你{{money}},你还我{{a}},还剩下{{b}}
        </p>
        <div :class="obj">styyle obj</div>
        <ul>
            <template v-for="item in list">
                <li :key="item"> hello，现在的序号是:{{item}}</li> 
            </template>
        </ul>
    </div>
</template>
<script>
import n from './n.js'
export default {
    name: 'HelloWorld',
    props: {
        msg: String,

    },
    data() {
        return {
            list: [1, 2, 3, 4],
            go: "sijiqwqeqwe,sadsd,sdaasdasd,sadsads",
            id: 'txt',
            seen: false,
            money: 100,
            a: 33,
            obj: {
                'test-1': true
            }
        }
    },
    computed: {
        b: function() {
            return this.money - this.a;
        }
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>