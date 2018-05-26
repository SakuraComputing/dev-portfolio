const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile');

// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({msg: "Profile works"}));


// @route GET api/profiles/handle/handle
// @desc Tests profiles route
// @access public
router.get('/handle/:handle', (req,res) => {
    const errors = {};
    console.log("Handles     ", req.params.handle);
    Profile.findOne({ handle: req.params.handle })
        .then(profile => {
            if(!profile) {
                errors.noprofile = 'No profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route POST api/profile
// @desc Create or edit users profile
// @access Private
router.post(
    '/',
    (req,res) => {
        // const { errors, isValid } = validateProfileInput(req.body);
        // if(!isValid) {
        //     // Return any errors with 400 status
        //     return res.status(400).json(errors);
        // }

        //Get fields
        const profileFields = {};
        if(req.body.handle) profileFields.handle = req.body.handle;
        if(req.body.company) profileFields.company = req.body.company;
        if(req.body.website) profileFields.website = req.body.website;
        if(req.body.location) profileFields.location = req.body.location;
        if(req.body.bio) profileFields.bio = req.body.bio;
        if(req.body.status) profileFields.status = req.body.status;
        if(req.body.githubusername) profileFields.githubusername = req.body.githubusername;
        // Skills - split into array
        if(typeof req.body.skills !== 'undefined') {
            profileFields.skills = req.body.skills.split(',');
        }


        Profile.findOne({ handle: profileFields.handle })
            .then(profile => {
                if(profile) {
                    // Update profile
                    Profile.findOneAndUpdate(
                        { handle: profileFields.handle },
                        { $set: profileFields },
                        { new: true }
                    )
                        .then(profile => res.json(profile));
                } else {
                    // Create
                    new Profile(profileFields).save().then(profile => res.json(profile));
                }
            }
        )
    }
);


module.exports = router;
