
const successmessage=(res,statu,mess,data)=>{
    return res.status(statu).json({
        message:mess,
        datas:data
    })
}
export default successmessage