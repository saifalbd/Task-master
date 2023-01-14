<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Create User"
        @add="save"
    >
        <va-form ref="form">
            <div class="layout gutter--md">
                <div class="row align-content--center">
                    <div class="flex xs12">
                        <va-input
                            v-model="name"
                            label="Name *"
                            placeholder="Name Here"
                            :rules="rs('Name', true)"
                        />
                    </div>
                    <div class="flex xs12 mt-2">
                        <va-input
                            v-model="email"
                            label="Email *"
                            placeholder="Email Here"
                            @change="changeEmail"
                            :rules="
                                rs('Email', { required: true, email: true })
                            "
                        />
                    </div>
                    <div class="flex xs12 mt-2">
                        <va-input
                            v-model="phone"
                            label="Phone"
                            placeholder="Phone Here"
                        />
                    </div>
                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { ref } from "@vue/reactivity";
import FormDialog from "../../Components/FormDialog.vue";
import { rs } from "../../Plugins/Rule";
import { values } from 'lodash';

export default {
    components: { FormDialog },

    props: {
        show: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { emit }) {
        let busy = ref(false);
        const canUser = ref(null)
        const form = ref(null);
        let name = ref("");
        let email = ref("");
        let phone = ref("");

        let rules = {
            title: [(v) => !!v || "title are requies"],
        };

        const save = async () => {
            let url = route("employee.store");
            let valid = await form.value.validate();
            if (!valid) return null;
            try {
                const { data } = await axios.post(url, { name:name.value,email:email.value,phone:phone.value });
                emit("push", data);
            } catch (error) {
                console.error(error);
            }
        };

        const changeEmail = async (event) => {
            const { value } = event.target;
            let filter =
                /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            const is = filter.test(value);
            if (!is) return null;

            try {
                   const url = route('user.showByEmail',{email:value});
                   const {data} = await axios.get(url);
                   const can = values(data)?data:null;
                   canUser.value = can;
                   if(can){
                    name.value = can.name;
                    
                   }
            } catch (error) {
                console.log(error);
            }
        };

        return {
            props,
            form,
            emit,
            changeEmail,
            rs,
            save,
            busy,
            rules,
            save,
            name,
            phone,
            email,
        };
    },
};
</script>

<style lang="scss" scoped></style>
