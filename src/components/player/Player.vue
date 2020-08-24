<template>
    <div class="player">
        <slot name="disc"></slot>
        <slot name="player-item"></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .player {
        height: 80px;
        border-radius: 50px 50px 0 0;
        background: rgb(147, 213, 220);
    }
</style>