const o=async(a,t,s=null)=>{const{data:e}=await axios.get(route("home.recentTask",{status:a,employee:s}));t(e)},n=async(a,t)=>{const{data:s}=await axios.get(route("home.recentJobTask",{status:a}));t(s)};export{n as a,o as r};
