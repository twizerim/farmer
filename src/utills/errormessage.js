
const errormessage=(res,statu,mess)=>{
    return res.status(statu).json({
        message:mess
    })
}
export default errormessage