export const calculation = (actionType,actionData)=>{
    console.log("action m aaya hai" ,actionType,actionData)
   return{
       type:actionType,
       payload:actionData
   } 
}