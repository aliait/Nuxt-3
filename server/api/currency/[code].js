export default defineEventHandler(async(event)=>{
    const { code } = event.context.params
    const {currencykey} = useRuntimeConfig()
    const url = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencykey}`
    const {data} = await $fetch(url)
    return data
})