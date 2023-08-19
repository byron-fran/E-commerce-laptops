export const getData = async()=>{
    const url = './src/api/data.json';
    try{
        const res = await fetch(url)

        return res
    }
    catch(err){
        console.log(err)
    }
}