<template>
    <div :class="{container: true, error: !isValid}">
        <input
            :value="modelValue"
            type="text"
            @input="$emit('update:modelValue', $event.target.value)"
            :style="inputStyle"
            :placeholder="placeholder"
        >
        <span v-show="!isValid" class="error-mark">!</span>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: String,
        isValid: {
            type: Boolean,
            default: true
        },
        inputStyle: String,
        placeholder: String
    }
}
</script>

<style scoped>
.container {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #333;
    padding: 10px;
}

.container.error {
    border-bottom: 1px solid red;
}

input {
    border: none;
    height: 20px;
    display: block;
    flex-grow: 1;
    text-decoration: inherit;
}

input:focus {
    outline: none;
}

.error-mark {
    color: red;
    height: 20px;
}
</style>
