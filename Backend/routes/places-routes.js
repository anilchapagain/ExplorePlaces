const express = require("express");


const router = express.Router();


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: ' Hotel Nandan',
    description: 'One of the most famous hotel in guwahati',
    location : {
      lat: 26.1783234,
      lng: 91.7499583
    },
    address: 'GS Rd, Manipuri Rajbari, Paltan Bazaar, Guwahati, Assam 781008',
    creator: 'u1'
  }
]
router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p=>{
    return p.id=== placeId;
  });
  if (!place){
   const error = new Error('Could not find a place for the provided id .');
   error.code = 404;
   throw error;
  }
  res.json({ place });
});
router.get('/user/:uid',(req, res, next) =>{
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });
  if (!place){
    const error = new Error('Could not find a place for the provided user id .');
    error.code = 404;
   return next(error);
   }
  res.json({place});
});
module.exports = router;
 