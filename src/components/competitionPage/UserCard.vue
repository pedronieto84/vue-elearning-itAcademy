<template>
    <div class="p-3">
        <h3>{{user.username}}</h3>
        <img class="mb-3" :src="user.img"/>
        <p>Level: {{user.level}}</p>
        <p>Points: {{user.points}}</p>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
        };
    }
}
</script>