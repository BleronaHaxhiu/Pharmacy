const express = require('express');
const router = express.Router();
const { signup, loginUser, getLoginUser, logoutUser, verify, refresh, getAllPharmacies, getPharmacyById, submitLicense, requestPasswordReset, resetPassword, getProductsByUserId, getProductsByPharmacyId, getUserProfileClient,updateUserProfileClient, changePasswordClient, showAllProducts, searchProducts, cartCount, getAllVetura, createVetura, getAllShoferi} = require('../controllers/userController');
const upload = require('../services/fileUpload');
const authMiddleware  = require('../middlewares/authMiddleware');

router.post('/signup', signup);
router.post('/login', loginUser);
router.get('/login', getLoginUser)
router.post('/logoutUser', logoutUser)
router.get('/verify' , verify)
router.get('/refresh', refresh)
router.get('/getAllPharmacies' , getAllPharmacies)
router.get('/pharmacies/:id', getPharmacyById);
router.post('/submitLicense', upload, submitLicense);


