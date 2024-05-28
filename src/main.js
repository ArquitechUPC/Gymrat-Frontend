import { createApp } from 'vue'
import './style.css'
import App from './app.vue'

//  Import router


// Import PrimeVue, PrimeVue CSS, PrimeVue Icons
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

// Import PrimeVue Services


// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';

// Import PrimeVue Components
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import Image from "primevue/image";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";
import Sidebar from "primevue/sidebar";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-button',         Button)
    .component('pv-toolbar',        Toolbar)
    .component('pv-image',          Image)
    .component('pv-icon-field',     IconField)
    .component('pv-input-icon',     InputIcon)
    .component('pv-input-text',     InputText)
    .component('pv-split-button',   SplitButton)
    .component('pv-sidebar',        Sidebar)
    .mount('#app')
