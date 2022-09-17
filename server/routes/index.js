var express = require('express');
const { Register, Login, Logout, GetInformations, UpdateInformation } = require('../controllers/Users.controller');
const {
    AddListing,
    GetPropertyByIdUser,
    getImages,
    GetProperties,
    GetLastPropertiesById,
    GetTotalSalesByUser,
    GetTotalRentsByUser,
    GetTotalCities,
    GetTotalVues,
    GetTotalListings,
    GetAllLoactionsByUser,
    GetListingByIdListing,
    SetProfilePicture
} = require('../controllers/Property.controllers.js');

const { postComments, GetAllCommentsByIdProperty, GetLastComments, } = require('../controllers/Comments.controller');

const { SendFirstStepEmail, CheckEmailIExist, ResetPassword } = require('../controllers/Email.controller');

const { GetAllNotificationByUserId, DeleteAllNotifications } = require('../controllers/Notifications.controllers')

const { PostLike, GetLikeCount, GetLikeState, GetAllPropertyILike } = require('../controllers/Likes.controllers.js');

const { AddVue, ShowVuesCount } = require('../controllers/Vue.controller.js');

const { AddFirstMessage, GetRoomId, GetAllMessagesAvailable } = require('../controllers/Messages.controller.js');

const { 
    TakeAnAppointment, 
    CheckIfRdvExist, 
    GetAllVisits, 
    ValidateRdv, 
    DeleteRdv, 
    CheckIfListingIsMine 
    } = require('../controllers/Appointment.controller');

var router = express.Router();
const auth = require('../middleware/auth')


// routes for inscription 
router.post('/inscrire', Register)

//Route for Login 
router.post('/login', Login)

//route to get information about the user 
router.post('/userinfo', GetInformations)

//route to update information
router.put('/updateUser', auth, UpdateInformation)

//Route for Logout
router.get('/logout', auth, Logout)

//Route for AddListing
router.post('/addListing', AddListing)

//Route to set profile picture
router.put('/SetProfilePicture', SetProfilePicture);

//Route for get listing by userid
router.get('/GetPropertyByIdUser', GetPropertyByIdUser);

//route to get Images
router.get('/GetImages/:path', getImages);

// routes for retrieving all properties or one property
router.use('/property', GetProperties)

//routes for retrieving last 3 properties for main page 
router.get('/getLastProperties', GetLastPropertiesById);

//route for getting the number of sales by the user 
router.get('/GetTotalSalesByUser', GetTotalSalesByUser);

//route for getting the number of rents by user
router.get('/GetTotalRentsByUser', GetTotalRentsByUser);

//route for guetting the nulmber of cities bu user
router.get('/GetTotalCities', GetTotalCities);

//route for getting the number of vues by user 
router.get('/GetTotalVues', GetTotalVues);

//route to get number of listings listed by user 
router.get('/GetTotalListings', GetTotalListings);

//route to get all locations 
router.get('/GetAllLoactionsByUser', GetAllLoactionsByUser);

//route to get listing by id of litinsg
router.get('/GetListingByIdListing/:id', GetListingByIdListing);

//route to post comment
router.post('/postComments', postComments);

//route to get allcomments for the property page
router.get('/GetAllCommentsByIdProperty', GetAllCommentsByIdProperty);

//#region email 

//send first email 
router.post('/SendFirstStepEmail', SendFirstStepEmail);

//Check if email exist or no 
router.post('/CheckEmailIExist', CheckEmailIExist);

router.put('/ResetPassword', ResetPassword);

//#endregion email 



//get all comments that belong to a certain user 
router.get('/GetLastComments', GetLastComments);

//Post like on listings
router.use('/PostLike', PostLike);

//get number of like by listing
router.get('/GetLikeCount', GetLikeCount);

//get the status of like by listing
router.get('/GetLikeState', GetLikeState);

//get all property that a user like
router.get('/GetAllPropertyILike', GetAllPropertyILike);

//#region Notification
router.get('/GetAllNotificationByUserId', GetAllNotificationByUserId);

router.delete('/DeleteAllNotifications', DeleteAllNotifications);
//#endregion

//#region Vues

router.post("/Addvue", AddVue);

router.get('/ShowVuesCount', ShowVuesCount);

//#endregion Vues


//#region Messages

router.post("/AddFirstMessage", AddFirstMessage);

router.get("/GetRoomId", GetRoomId);

router.get("/GetAllMessagesAvailable", GetAllMessagesAvailable);



//#region Appointment
router.post("/TakeAnAppointment", TakeAnAppointment);

router.get("/GetAllVisits", GetAllVisits);

router.put("/ValidateRdv", ValidateRdv);

router.delete("/DeleteRdv", DeleteRdv);

router.get('/CheckIfListingIsMine', CheckIfListingIsMine);

router.get('/CheckIfRdvExist', CheckIfRdvExist);

module.exports = router;
