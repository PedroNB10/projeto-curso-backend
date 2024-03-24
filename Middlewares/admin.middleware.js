import jwt from 'jsonwebtoken'

export default function autorizarAdmin(req, res, next) {
    const authHeader = req.headers['authorization']

    if (authHeader == null) {
        return res.status(401).json({
            msg: 'Você precisa ser um administrador para acessar esse recurso'
        })
    }

    const token = authHeader.split(' ')[1]// ['Bearer', 'token'][1] (transforma em um array)

    if(token){

        jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{

            const role = user.role // usuário ao qual o token pertence

            if(err || role == false){
                return res.status(401).json({
                    msg:'Você precisa ser um administrador para acessar esse recurso'
                })
            }

            next() // se o token for válido, ele vai para a próxima função
        })
        
    }
    else{
        res.status(401).json({
            msg:'Você precisa ser um administrador para acessar esse recurso'
        })
    }

}