
export const recentTasks = async (status,callBack)=>{
    const {data}= await axios.get(route('home.recentTask',{status}));
    callBack(data)
}

export const recentJobTasks = async (status,callBack)=>{
    const {data}= await axios.get(route('home.recentJobTask',{status}));
    callBack(data)
}

