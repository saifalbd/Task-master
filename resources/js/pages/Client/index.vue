<template>
 <app-layout-vue :busy="busy">
    <page-title-box title="Clients">
        <!-- <create-button title="add Client"></create-button> -->
    </page-title-box>
<el-divider />


<el-row :gutter="24">
<el-col :sm="12" :md="12"  v-for="(item, index) in items" :key="index">
  <el-card class="card-box">
          <div class="avatar-box">
            <el-avatar :size="200" :src="item.avatar.url" />
          </div>

          <div style="padding: 14px">
            <el-descriptions
              :title="item.name"
              direction="horizontal"
              :column="1"
              size="large"
              border
            >
      
              <el-descriptions-item label="Phone:">{{
                item.phone
              }}</el-descriptions-item>
              <el-descriptions-item label="Message:"
                ><el-button
                  size="small"
                  type="info"
                  plain
                  @click="goProfile(item.id)"
                >
                  <el-icon>
                    <message />
                  </el-icon> </el-button
              ></el-descriptions-item>
      
              <el-descriptions-item label="View:"
                ><el-button
                  size="small"
                  type="info"
                  plain
                  @click="goProfile(item.id)"
                >
                  <el-icon>
                    <more />
                  </el-icon> </el-button
              ></el-descriptions-item>
            </el-descriptions>
          </div>
        </el-card>
</el-col>
</el-row>



 </app-layout-vue>
</template>

<script>
import { ref } from 'vue'
import appLayoutVue from '../../Layouts/app-layout.vue'
import PageTitleBox from "../../Components/PageTitleBox.vue";
import Pagination from "../../Components/Pagination.vue";
import CreateButton from '../../Components/CreateButton.vue';
import {More,Message} from '@element-plus/icons-vue';
import {useRouter} from 'vue-router';

export default {
    components:{
        appLayoutVue,
        PageTitleBox,
        Pagination,
        CreateButton,
        More,
        Message
    },
    setup () {
        const busy = ref(false);
        const router = useRouter();

        const items = ref([]);

        const fetchItems = async()=>{
            try {
                const url = route('client.index');
                const {data} = await axios.get(url);
                console.log(data)
                items.value = data;
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchItems();

          const goProfile = (user) => {
      router.push({ name: "userProfile", params: { user } });
    };

        return {busy,items,goProfile}
    }
}
</script>

<style lang="scss" scoped>

</style>