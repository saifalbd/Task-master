<template>
  <app-layout :busy="busy">
    <div>
      <page-title-box></page-title-box>
    </div>
    <div class="page-layout">
      <div class="left-side"></div>
      <div class="right-side">
        <h3 class="list-title">Employee Proposal</h3>
        <ul>
          <li v-for="(proposal,i) in employeeProposals" :key="i">
            <div class="s-card">
              <div class="s-card-body">
                <va-avatar :src="proposal.user.avatar.url" :size="30" class="mr-6" />
                <span>{{proposal.user.name}} assgned you as a Empoloyee</span>
              </div>
              <div class="s-card-footer">
                <va-button
                  preset="secondary"
                  border-color="primary"
                  size="small"
                  icon="swipe_right"
                  round
                  @click="Accepted(proposal,i)"
                  >Accepted</va-button
                >
                <va-button
                  preset="secondary"
                  border-color="danger"
                  size="small"
                  icon="do_not_disturb_on"
                  round
                   @click="Deny(proposal,i)"
                  >Deny</va-button
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "../../Layouts/app-layout.vue";
import PageTitleBox from "../../Components/PageTitleBox.vue";
import { ref } from "vue";
export default {
  components: {
    AppLayout,
    PageTitleBox,
  },
  setup() {
    const busy = ref(false);
    const employeeProposals = ref([]);
    
    axios.get(route('employeeProposal')).then(({data})=>{
       employeeProposals.value = data
    });

    const Accepted = async(employee,index)=>{
        try {
            await axios.get( route('acceptProposal',{employee}));
            employeeProposals.value.splice(index,1)
        } catch (error) {
            console.error(error)
        }
    }
    const Deny = async(employee,index)=>{
        try {
            await axios.get( route('denyProposal',{employee}));
             employeeProposals.value.splice(index,1)
        } catch (error) {
            console.error(error)
        }
    }

    return { busy,employeeProposals,Accepted,Deny };
  },
};
</script>

<style lang="scss" scoped>
.page-layout {
  display: grid;
  grid-template-columns: auto 270px;
}
.right-side {
    .list-title{
        margin: 5px;
    }
  .s-card {
    border: 1px solid black;
    width: 250px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
    .s-card-body {
      padding: 5px;
      text-align: center;
    }
    .s-card-footer {
      padding: 5px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
