const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.set("view engine", ".hbs");
app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs', 
hbs({
    defaultLayout: "main",
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: ".hbs"
})
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=>{
res.render('Home');
});

app.get('/Home', (req, res)=>{
    res.send('Pagina Principal');
})

app.get('/gallery', (req, res)=>{
    res.send('Galeria de fotos');
})

app.get('/activities', (req, res)=>{
    res.send('pagina de actividades');
})

app.get('/aboutus', (req, res)=>{
    res.send('pagina sobre nosotros');
})

app.get('/Contacto', (req, res)=>{
    res.send('pagina de contacto');
})

app.listen(PORT, ()=> {
//  console.log(__dirname);
 console.log (`server at http://localhost:${PORT}`);   
})

app.use((req, res)=>{
    res.send('404');
})