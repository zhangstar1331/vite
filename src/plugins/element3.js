// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'
import {ElButton} from 'element3'
import 'element3/lib/theme-chalk/button.css'
//插件写法
export default function(app){
    //app.use(element3)
    app.use(ElButton)
}