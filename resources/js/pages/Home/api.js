
export const recentTasks = async (status,callBack)=>{
    const {data}= await axios.get(route('home.recentTask',{status}));
    callBack(data)
}