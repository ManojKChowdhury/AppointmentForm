import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import DataTable from 'primevue/datatable';
import Panel from 'primevue/panel'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import AutoComplete from 'primevue/autocomplete'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Dialog from 'primevue/dialog'
import Inplace from 'primevue/inplace'
import InputText from 'primevue/inputtext'
import Chips from 'primevue/chips'
import Column from "primevue/column";
import Rating from "primevue/rating";
import Toast from "primevue/toast";



export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("DataTable", DataTable);
    nuxtApp.vueApp.component('Panel', Panel)
    nuxtApp.vueApp.component('Toolbar', Toolbar)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('Dropdown', Dropdown)
    nuxtApp.vueApp.component('AutoComplete', AutoComplete)
    nuxtApp.vueApp.component('Card', Card)
    nuxtApp.vueApp.component('Tag', Tag)
    nuxtApp.vueApp.component('Dialog', Dialog)
    nuxtApp.vueApp.component('Inplace', Inplace)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Column', Column)
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Rating', Rating)

    //other components that you need
});
