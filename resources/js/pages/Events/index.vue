<template>
 <app-layout :busy="false">
       <div>
            <page-title-box title="Events">
                <create-button title="Add Events" @click="showCreate = true"></create-button>
            </page-title-box>
        </div>

    <div class="calendar-box">
          <el-calendar ref="calendar" v-loading="busy">

    <template #header="{ date }">
      <!-- <span>Custom header content</span> -->
      <span>{{ date }}</span>
      <el-button-group>
      
        <el-button  @click="selectDate('prev-month')">
          Previous Month
        </el-button>
        <el-button  @click="selectDate('today')">Today</el-button>
        <el-button  @click="selectDate('next-month')">
          Next Month
        </el-button>
     
      </el-button-group>
    </template>

    <template #date-cell="{ data }">
      <div class="date-box">
       
      <div class="top-bar">
         <div> {{ data.day.split('-').slice(2).join('-') }}</div>
      </div>
      <div class="info-box">
        <ul>
          <li v-for="event in getEvents(data.day)" :key="event.id" :title="event.title" :style="{borderColor:event.color.border,backgroundColor:event.color.bg}">
            <span class="time" :style="{color:event.color.time}">{{event.time}}:</span>
            <span class="cat" :style="{color:event.color.cat}">{{event.categoryName}}:</span><span :style="{color:event.color.title}">{{event.sortTitle}}</span>
          </li>
        </ul>
      </div>
        
      </div>
    </template>
  </el-calendar>
    </div>

  <create-vue v-model:show="showCreate" :categories="eventCategories"></create-vue>

 </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import CreateButton from '../../Components/CreateButton.vue';
import { reactive, ref } from 'vue';
import CreateVue from './Create.vue';
import { dropdowns } from '../../Plugins/utility';
import moment from 'moment';
import { groupBy, sortBy, truncate } from 'lodash';
export default {
    components:{
        AppLayout,
        PageTitleBox,
        CreateButton,
        CreateVue
    },
    setup () {
      const calendar = ref();
      const busy = ref(true);
        const showCreate = ref(false);
        const eventCategories = ref([]);

        const events = ref({});

        const monthIndex = ref(null);
        const year = ref(null);
        let m = moment();
        monthIndex.value = m.month();
        year.value = m.year();


      


        const getEvents = (date)=>{
        let has = events.value[date];
        if(has){
          console.log(has)
          return has;
        }else{
          return []
        }
         
        }

        dropdowns('eventCategories',(data)=>{
          eventCategories.value = data;
        })


        const fetch = async()=>{
          try {
            let d = new Date(`${year.value}-${monthIndex.value+1}-01`);
            let mm =  moment(d).format('YYYY-MM')
            const url = route('event.index',{dateLike:mm});
            const {data} = await axios.get(url);
            let list = groupBy(sortBy(data,'categoryName').map(e=>{
              e.sortTitle = truncate(e.title,{
  'length': 10,
  'separator': '..'
})
return e;
            }),'date');
            events.value = list;
            console.log(list)
            busy.value = false;
          } catch (error) {
           console.error(error) 
          }
        }
        fetch()

      const selectDate = (val) => {
  calendar.value.selectDate(val);

  const selectedDay = calendar.value.selectedDay;
  if(val=='today'){
    let d = new Date();
      monthIndex.value = d.getMonth();
  year.value = d.getFullYear();
  }else{

  const {$M,$y} = selectedDay;
  monthIndex.value = $M;
  year.value = $y;
  }

}
        

        return {busy,calendar,showCreate,events,eventCategories,selectDate,getEvents}
    }
}
</script>

<style lang="scss" scoped>


// .is-selected{

// }

</style>