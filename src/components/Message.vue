<template>
    <div>
        <div v-if="name === 'admin'" class="system">
           <p class="text-center">{{text}}</p>
        </div>
        <div v-else class="user">
            <div class="message" :class="{owner}">
                <strong>{{name}}</strong>
                <p>{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        text: String,
        owner: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.system {
    margin-bottom: 1rem;

    p {
        margin-bottom: 1rem;
    }
}

.user {
    display: flex;
    flex-direction: column;

    .message {
        position: relative;
        padding: 1rem;
        width: 60%;
        margin: 0 1rem;
        box-shadow: 0 1px 0 0 rgba(50, 50, 50, 0.3);
        border-radius: 4px;
        background: #1976d2;
        margin-bottom: 1rem;

        &.owner {
    background: #fff;
    color: #000;
    align-self: flex-end;
}

        p {
            margin-bottom: 0;
        }
    }
}
</style>