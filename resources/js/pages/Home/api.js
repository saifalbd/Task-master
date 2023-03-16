
export const recentTasks = async (callBack)=>{
    const {data}= await axios.get(route('home.recentTask'));
    callBack(data)
}