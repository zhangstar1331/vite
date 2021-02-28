<script lang="jsx">
import { ref } from 'vue'
export default{
    //针对于vue3
    setup () {
        let counter = ref(1)
        const add = () => {
            counter.value++
        }
        return () => (
            <>
            <div>Comp</div>
            <p onClick={add}>{counter.value}</p>
            </>
        )
    }
    //针对于vue2写法
    /*
    data(){
        return {
            counter: 1
        }
    },
    render(){
        return (
            <>
            <div>Comp</div>
            <p onClick={this.add}>{this.counter}</p>
            </>
        )
    },
    methods: {
        add() {
           this.counter++ 
        }
    }
    */
} 
</script>
