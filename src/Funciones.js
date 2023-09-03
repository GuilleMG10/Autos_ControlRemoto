function posicionInicial(posicionX,posicionY,orientacion)
{
    return [posicionX,posicionY,orientacion];
}

function VerificarFormato_Entrada(posicionX,posicionY,orientacion)
{
    if(Number.isInteger(posicionX) && Number.isInteger(posicionY) && typeof orientacion === 'string' )
    {
       if(orientacion=="N" || orientacion=="S" ||orientacion=="O"||orientacion=="E")
       {
        return true;
       }  
    }
    return false;
}
function Devolver_Comandos(comandos)
{
    return comandos;
}

export {posicionInicial,VerificarFormato_Entrada,Devolver_Comandos};