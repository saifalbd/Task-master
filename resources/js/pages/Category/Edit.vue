<template>
    <form-dialog
        :show="props.show"
        @update:show="emit('update:show', $event)"
        :busy="busy"
        title="Edit Cetegory"
           is-edit
        @add="save"
    >
        <va-form ref="form">
            <div class="layout gutter--md">
                <div class="row align-content--center">
                    <div class="flex xs12">
                        <va-input
                            v-model="title"
                            label="Title"
                            placeholder="Title Here"
                              :rules="rs('title',true)"
                        />
                    </div>
                       <div
            class="flex xs12 mt-2"
            style="display: flex; align-items: center"
          >
            <va-switch
              v-model="showColor"
              true-inner-label="Hide Color"
              false-inner-label="Show Color"
              class="mr-6"
            />
          </div>

          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Background Color</label>
            <va-color-palette
              v-model="color.bg"
              :palette="[
                '#154EC1',
                '#767C88',
                '#262824',
                '#FFFFFF',
                '#FFD43A',
                '#E42222',
              ]"
            />
          </div>
          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Text Color</label>
            <va-color-palette
              v-model="color.text"
              :palette="[
                '#154EC1',
                '#767C88',
                '#262824',
                '#FFFFFF',
                '#FFD43A',
                '#E42222',
              ]"
            />
          </div>

          <div class="flex xs12 md4 mt-2" v-if="showColor">
            <label for="">Border Color Color</label>
            <va-color-palette
              v-model="color.border"
              :palette="[
                '#154EC1',
                '#767C88',
                '#262824',
                '#FFFFFF',
                '#FFD43A',
                '#E42222',
              ]"
            />
          </div>

          <div class="flex xs12 mt-4" v-if="showColor">
            <div
              class="custom-card"
              :style="{
                border: `2px solid ${color.border}`,
                color: color.text,
                backgroundColor: color.bg,
              }"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              eveniet ad eligendi molestiae doloribus. Explicabo obcaecati rem
              laboriosam voluptatibus aperiam veniam, asperiores voluptatem ea,
              recusandae voluptates quos tempora officiis quae?
            </div>
          </div>
                </div>
            </div>
        </va-form>
    </form-dialog>
</template>

<script>
import { reactive, ref, watch } from "vue";
import FormDialog from "../../Components/FormDialog.vue";
import { validErorrs } from "../../Plugins/utility";
import { rs } from "../../Plugins/Rule";
export default {
    components: { FormDialog },

    props: {
        show: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
        },
    },

    setup(props, { emit }) {
        let busy = ref(false);
        const form = ref(null);
        let item = ref(props.item);
        let title = ref(props.item.title);
            let color =reactive(props.item.color)
        watch(props.item, (o) => {
            item.value = o;
            title.value = o.title;
        });

          let showColor = ref(true);

        const save = async () => {
            let url = route("category.update", { category: item.value.id });
            let valid = await form.value.validate();
            if (!valid) return null;
            try {
                const { data } = await axios.put(url, { title: title.value,color });
                emit(
                    "replace",
                    addProtos(data, {
                        action: true,
                        showEdit: false,
                    })
                );
            } catch (error) {
                validErorrs(error);
            }
        };

        return { props, form, emit, save,rs, title, busy,showColor,color };
    },
};
</script>

<style lang="scss" scoped></style>
