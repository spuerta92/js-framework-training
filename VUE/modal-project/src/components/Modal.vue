<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{alert: type === 'alert'}">
            <p>{{message}}</p>
            <p>{{text}}</p>
            <slot></slot>
            <slot name="links"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['message', 'text', 'type'],
    data() {

    },
    methods: {
        closeModal() {
            this.$emit('closemodal')
        }
    }
}
</script>


<style scoped>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .modal.alert {
        background: crimson;
        color: white;
    }
</style>