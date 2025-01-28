const index = (req,res)=>{
    try{
        res.render('index');
    }catch(error){
            console.error(error.message);
            res.status(500).send('error en el servidor');
        }
    }

    const about = (req,res)=>{
        try{
            res.render('about');
        }catch(error){
                console.error(error.message);
                res.status(500).send('error en el servidor');
            }
        }

        const clients = (req,res)=>{
            try{
                res.render('clients');
            }catch(error){
                    console.error(error.message);
                    res.status(500).send('error en el servidor');
                }
            }

            
        const contact = (req,res)=>{
            try{
                res.render('contact');
            }catch(error){
                    console.error(error.message);
                    res.status(500).send('error en el servidor');
                }
            }

            
        const ourwork = (req,res)=>{
            try{
                res.render('ourwork');
            }catch(error){
                    console.error(error.message);
                    res.status(500).send('error en el servidor');
                }
            }

    module.exports={
        index,
        about,
        clients,
        contact,
        ourwork}