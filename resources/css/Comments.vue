<template>
    <div class="comment-list">
        <div
            class="comment-list-item"
            v-for="(comment, index) in comments"
            :key="index"
        >
            <div>
                <va-avatar
                    src="https://randomuser.me/api/portraits/women/5.jpg"
                />
            </div>
            <div>
                <p>
                    <b>{{ comment.user.name }}</b>
                </p>
                <p>{{ comment.text }}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        comments:{
            type:Array,
            required:true
        }
    },
    setup() {


        return {};
    },
    render()
};
</script>

<style lang="scss" scoped></style>
