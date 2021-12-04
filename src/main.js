import { createApp } from "vue"
import VueScreen from "vue-screen"
import App from "./App"
import components from "@/components/UI"
const app = createApp(App)

app.use(VueScreen, {
    mobile: "760px",
})

components.forEach((element) => {
    app.component(element.name, element)
})

app.mount("#root")
