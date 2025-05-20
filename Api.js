const express = require("express");                        const app = express();
const PORT = 4000;                                         
app.get("/", (req, res) => {                                   res.send("Oi");
});                                                        
app.get("/login/nome/:nick/senha/:senha", (req, res) => {  let logado = false;
    const nickname = req.params.nick;                          const senha = req.params.senha;
                                                               if (senha === "admin" && nickname === "admin") {
        logado = true;                                             res.redirect("/admin");
    } else {
        res.status(401).send("Login inválido");
    }
});

app.get("/admin", (req, res,logado) => {
    if (logado === true) {
        res.send("Bem-vindo à área admin!");
    } else {
        res.status(401).send("Acesso bloqueado. Erro 401");
    }
});

app.listen(PORT, () => {
    console.log("Rodando na porta: " + PORT);
});
