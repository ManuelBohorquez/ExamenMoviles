//Importo solo el enrutador desde express
import { Router } from "express";
//Inicio el enrutador y lo almaceno en una constante
const router = Router();
//Crear rutas
router.get('/', (req, res) => res.render('home', {title:'Home'}))
router.get('/login', (req, res) => res.render('login', {title:'Login'}))
router.get('/registro', (req, res) => res.render('registro', {title:'Registro'}))

export default router;