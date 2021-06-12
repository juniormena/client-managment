function genericResponse(response){
   return response.status(500).json({
        success:false,
        data:[],
        message:"No pudimos atender tu solicitud, lo sentimos!!"
    })
}


module.exports = {
    genericResponse
}