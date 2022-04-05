import React from "react";
import PropTypes from "prop-types";

import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Divider, Typography } from "@material-ui/core";
import './profile.css'


const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    skills,
  },
}) => {
  return (
    <>
      <div className="col-xl-3 col-md-4 col-sm-6">
        <Card className="cardcolor" style={{
          border: "#ccc solid 1px",
          color: '#fff',
          backgroundColor: '#001E3C',
          borderRadius: "6px"
        }} color="text.secondary" sx={{ minWidth: 275, maxHeight: 340 }}>
          <CardContent>

            <Box style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "10px",
              height: "110px",
              maxHeight: "120x",
              width: "100%",

            }}>
              <Avatar
                style={{ width: "70px", height: "70px" }}
                alt="50x50"
                src={avatar}
              >

                R
              </Avatar>
              {console.log(avatar)}
              <div>
                <Typography variant="h6" className="text-break" >
                  {name}
                </Typography>
                <Typography variant="body2" className="text-break">
                  {status} {company && <span> at {company}</span>}
                </Typography>
              </div>
              {/* <p className="my-1">{location}</p> */}
            </Box>
            <div className="skills"

              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px",
                height: "70px",
                gap: "10px"
              }}

            >
              {skills.slice(0, 5).map((skill, index) => (

                <Chip key={index} label={skill} size="small" color="primary" className="bg-info" />
                // <li

                //   className="d-inline-block rounded-pill"
                //   style={{
                //     textTransform: "capitalize",
                //     padding: "5px 10px",
                //     margin: "5px",
                //     color: "white",
                //     fontWeight: "600",
                //   }}
                // >

                // </li>
              ))}
            </div>



          </CardContent>
          <Divider />
          <CardActions>

            <Button size="small" href={`/profile/${_id}`} className="bg_green_1"

            >
              View Profile
            </Button>
          </CardActions>


        </Card>
      </div>
    </>
  );
};

// means we requires these props
ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
