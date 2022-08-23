

<template>
    <tapir-widget :time="2" backendEndpoint=""
                  buttonColor="green"/>
</template>

<script>
import TapirWidget from 'vue-audio-tapir';
import 'vue-audio-tapir/dist/vue-audio-tapir.css';

export default {
    name: 'App',
    components: {
        TapirWidget,
    }
}
</script>

