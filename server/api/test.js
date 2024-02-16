export default defineEventHandler(async(event)=>{
    // const { name } = getQuery(event) 
    // const { age } = await readBody(event)
  

    const{ data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_USEGR18o1d3XPYC8vK0Tp9CWDWF6uJB8Fbjg5V2x`)
    return data
})